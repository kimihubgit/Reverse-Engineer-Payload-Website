import json
import base64
import hashlib
import os
from cryptography.hazmat.primitives.ciphers import Cipher, algorithms, modes
from cryptography.hazmat.primitives import padding

def evp_bytes_to_key(password, salt, key_length=32, iv_length=16):
    password = password.encode('utf-8')
    derived = b''
    d = b''
    while len(derived) < key_length + iv_length:
        d = hashlib.md5(d + password + (salt if salt else b'')).digest()
        derived += d
    key = derived[:key_length]
    iv = derived[key_length:key_length + iv_length]
    return key, iv

def decrypt_aes(ciphertext, key):
    decoded = base64.b64decode(ciphertext)
    if decoded[:8] != b'Salted__':
        raise ValueError("Invalid ciphertext format")
    salt = decoded[8:16]
    data = decoded[16:]
    derived_key, derived_iv = evp_bytes_to_key(key, salt)
    
    cipher = Cipher(algorithms.AES(derived_key), modes.CBC(derived_iv))
    decryptor = cipher.decryptor()
    unpadded = decryptor.update(data) + decryptor.finalize()
    
    unpadder = padding.PKCS7(algorithms.AES.block_size).unpadder()
    plaintext = unpadder.update(unpadded) + unpadder.finalize()
    
    result = plaintext.decode('utf-8')
    
    if result.startswith('"') and result.endswith('"'):
        result = result[1:-1]
    return result

def generate_key():
    return os.urandom(16).hex()

def encrypt_aes(data, key):
    salt = os.urandom(8)
    derived_key, derived_iv = evp_bytes_to_key(key, salt)
    
    json_data = json.dumps(data).encode('utf-8')
    
    padder = padding.PKCS7(algorithms.AES.block_size).padder()
    padded = padder.update(json_data) + padder.finalize()
    
    cipher = Cipher(algorithms.AES(derived_key), modes.CBC(derived_iv))
    encryptor = cipher.encryptor()
    ciphertext = encryptor.update(padded) + encryptor.finalize()
    
    
    return base64.b64encode(b'Salted__' + salt + ciphertext).decode('utf-8')

def register_user(e, t, n):
    key = generate_key()
    encrypted_data = encrypt_aes(e, key)
    encrypted_passwords = encrypt_aes({
        'password': t,
        'confirmPassword': n
    }, key)
    
    response = {
        'ct': encrypted_data,
        's': encrypted_passwords,
        'iv': key
    }
    return response


data = {
    "ct": "U2FsdGVkX18TFStrodjBzfoOCjsKagmAWtlxDoGf9SXdGlPUs9IUPiOoH41MPLHvr2IBt1g3IW46es66BsRPykifXSBiWnSFe8GhzTHHLRc=",
    "iv": "adc763cf0aa7dd04b90b63c6fd216138",
    "s": "17d3e600beff972fbe8b0666997d50dd64de4fca85cb19c20bda5025d771e760"
}


print(decrypt_aes(data['ct'], data['iv']))
print(register_user("user name", "matkhau", "matkhau2"))