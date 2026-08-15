// parse_with_dump.js - Dump dữ liệu gốc và parse nếu cần

// Hàm unescape thủ công
function unescapeString(escaped) {
    return escaped.replace(/\\(x[0-9a-fA-F]{2}|r|n|t|b|f|"|'|\\)/g, (match, group) => {
        if (group.startsWith('x')) {
            return String.fromCharCode(parseInt(group.slice(1), 16));
        }
        switch (group) {
            case 'r': return '\r';
            case 'n': return '\n';
            case 't': return '\t';
            case 'b': return '\b';
            case 'f': return '\f';
            case '"': return '"';
            case "'": return "'";
            case '\\': return '\\';
            default: return match;
        }
    });
}

// Hàm dump bytes dưới dạng hex (dễ đọc binary gốc)
function hexDump(bytes) {
    let hex = '';
    for (let i = 0; i < bytes.length; i++) {
        const byte = bytes[i].toString(16).padStart(2, '0').toUpperCase();
        hex += byte + ' ';
        if ((i + 1) % 16 === 0) hex += '\n'; // Mỗi dòng 16 bytes
    }
    return hex.trim();
}

// Hàm dump bytes dưới dạng text (nếu printable)
function textDump(bytes) {
    let text = '';
    for (let i = 0; i < bytes.length; i++) {
        const char = bytes[i] >= 32 && bytes[i] <= 126 ? String.fromCharCode(bytes[i]) : '.';
        text += char;
    }
    return text;
}

// Hàm chính: Dump gốc và parse (nếu muốn)
function processEscapedSegment(input, dumpOnly = false) {
    let escapedStr;
    if (Array.isArray(input)) {
        escapedStr = input.join(''); // Ghép mảng thành chuỗi
    } else {
        escapedStr = input;
    }
    // Unescape
    const unescapedStr = unescapeString(escapedStr);

    // Chuyển thành Uint8Array
    const bytes = new Uint8Array(unescapedStr.length);
    for (let i = 0; i < unescapedStr.length; i++) {
        bytes[i] = unescapedStr.charCodeAt(i) & 0xff;
    }

    // Dump dữ liệu gốc
    console.log('Dữ liệu gốc (hex dump):\n' + hexDump(bytes));
    console.log('\nDữ liệu gốc (text dump, printable only):\n' + textDump(bytes));
    console.log(`\nĐộ dài bytes: ${bytes.length}`);

    if (dumpOnly) return; // Nếu chỉ muốn dump, dừng ở đây

    // Parse nếu dữ liệu là mouse events
    const events = [];
    for (let i = 0; i + 8 <= bytes.length; i += 8) {
        const dv = new DataView(bytes.buffer, i, 8);
        const x = dv.getUint16(0, false);
        const y = dv.getUint16(2, false);
        const timestamp = dv.getUint32(4, false);
        events.push({ x, y, timestamp });
    }
    console.log('\nKết quả parse (nếu là mouse events):', events);
}

// Đoạn escaped: Dán vào đây
const escapedStr = [
  "\x1F�\b\x00\x00\x00\x00\x00\x00\x03��o]�y�I^\x11���H�rq�(�\x1D�0eǊ�\x02�,�\x0B�R��3���2ӫ�W)��i�M\x0Bt\x0F�\x05-ҴI�4�BQ�\x05��E�\x1F��/}�c\x17�/}�C�e�93�\x1C٪-�JJ�+���3g���\x1C\x0E�mnn�{ko}he��s���\x7F���C\x7F���\x1F���}���f���G�\x16�[����޽����hkwy07��޻���/��3R7�S���sk\x0B�ս{ք��\x0E��WǠ\x10�Ql��\x1B�����\x00~[�ڻ��>꠽\x0E�\t7XZ�\r%��Bm\f�6\x06���K�+{��dosyma��n�5�ܻ\x17d�n�0ȕ�\r�2�\\A�,e\x18\x13Jw2F��m�?\x04\x1D�T��6\x0B䚌���\x0Ev�\x17�\x06{��VF뛃�F��\x00�Ε���\x15}��+��\x16���+ϼ|���g���g�/]��vN߱/�?��suq{�����W�wN\x7F�f�l��7\x16\x07t����.�ixjy���~��2�����Ó��\bnwv��G_��fO�8:���<��\x0F��kW֖\x16F�6�w��{w�>�\x0F@���o\x0B���緶�\x07W\x06�^Z\x1B��V\x1EX���K�����d\x7Fy��`����ѧ��[�\x18�\f�z�\x0F\x1C~�o\f�\x1Bk钭��o�޼�9�8������7gol��/�o\rFG�{}{��\x07���'\x03��J����\x17΍�\x1C}�����\x1F����\x7F\r~>\x7F�S������\x1E������xk��ݻ�������`n�885\x1A�9X\x1A��\x0E�v�ݸ��p����π]V?\r�&�W�SA,\x06c\x16�>�E\\\x18h�(U\x18�I)\x13����`ism�\x04�o͏N/�N���n��N�/�\f\x07��\x0B��F��խ�������`�ywxE?�ʕ\x1D��Y]]4�m�p\x13�q�w\x18�\x1D*�\f\x17\x17G�K�̓��h~yp�8Z�;��vwqym�4~7\x01���{��\x7F\x12\n" +
    `�}domi\x0E�\x1B\\\fUk�M�s<\x1A\x0F��ul,���WS������v���o���?����s;\x1F߹����^|��3��-?u驫���u�\x0EuX�[]\x19?m6�^�襋7��\x15��>w��z4/�o\\��ag�����K�7�_9\x7F�ܝ\x0B[�/�S�\x16��k�g�]R�\x1D��W��\x17_v�KG\x7F�x�ٽw�\x10�\x0E��\x14��\x13\x0F���ěo<0o~��� ������_��7��KO\x1F��\x17���џ@�������m/Ԅ��I�w����\x06���\tt��\x05fݼ���9\x1E,p��\x0Ehqc0Xz�z-U�w��\t���T���VU�\x1D�"�\b�\x1B�/\r�Ü\x1B.obD�ks�\x1C\f�\x0Bqe0\x1E����x�D�ȿn��[��AuC����vb\x17�<���:�!��$\bk,H�g�p�\x0Fm#ޡ\x1B,\x0F/\f6��H�ˠ�^�\x14�q�:�����u.�z1"����\x10�M�\x11@a1����ܬ\f�8\\Z\x1C,c�Y����p}y|s�.D�'\x13@;�\x01�)\x0B\x1C\x01n�\b �\x0B�@����1ic0^�Xzy��>(�u�\x12PǺsi�YJ�s�߼z���w�ٽy��\x1B��D���{����<{\x15�<ٻx���\x17�\x00\x16\x13{vmqpsm{�|}8^\x1B�Uk�l7.�!/��\\IC�\x02���M\x10�I(���@��Nss�b�����A����;�\x17��ϭ������f���۷���L���09����\t \x07�x"-�߁�'~\x02n�xh\x00�ar\b�?b\x10�\x1B\x05�9�Z.\x05ݯ'��ka���㊴C<ٲ�e?16\x0219\x11\x1AH@\x12�XGW��P^��E$\x11��\x04��YLV��\f]g\x13\n` +
    'x;�)\x00\x7F��2t]@{\x1B��\x12��"\x16\x13�\x18NC\t�\t\x16\x10���\x18��k\x15$��6\x12�ГC=�\x06�Lcr��C\x01I�H�)\x01S\x17\x1CV\bp؈�\x17�\f⋐��l@�p\n' +
    '�\x12�*B"�&\x0E��d&�\x0BX@���J2�\n' +
    '��\n' +
    '�J��D\x04��L\n' +
    `�!TFH,��\rY\x15b\x00C\x03b�\x14RL\x01�\x1Ab�H%�\rP��A\x0B1%����\x17졙FCi\b��!\x1A4�q���DU �1(H'd\x0B��\x14��"��XL�c��\x130%���)¦�\rU5�\x18�\n` +
    'S�1^�pЄE��g,\x19�\n' +
    '[Yc�`m)n(�C\x18\x02�V�\x12���\rbs��WlOp\x07��\x167��C�u\x07�\x1D�G���\x01�=#�:�3�譣���XQ\x17�ZXYl�hh�64h�h���\x16�\x0E�\n' +
    '���\x06��ؓ甆\'զ��P�T4T��:�����F�\t=�O\x18\rO4m�XI�\x13F\x1F�\x81:*�>\x1Dz\x1B\t\x07O�\x1F9�&9�����4\x13���\x01�\rM>=L\x06+\x1Cɯ��[�`�q\x07L�j�\x11�@p�\x1C�sL���y��86�]/\x13ȳ�������\x00��\x1A�\r=�rB68�E\x02�O��\x1B�g \x7FXچ��\x9E\x1D:v\x15�NU�\x1D�v\r\'��)���{_��W�\x16�U5\'w��>U�\x0F�\x1AK$\x0E%��\x02W��D,;\x18bt�59\x7Fൃ\x0F��@�-��M�`�\x19\x14��P\x13Z\x17hC\x11Y߹@sL��� \x1B\x05\x15"N�\x0Fy�X)\x04��P\x0B\x0Ea\x16\x03\n' +
    '��Q!�1�iB+*!(Q8+i]A\x0E6̚�\n' +
    'i�\x1B\x15�Q4#:��\\\x11�9�mEp<�����\x15�\x14�5\n' +
    '�\x0E��($%W��\x1A\x1AB\r6&h��4\n' +
    'ι�\f�I����C(��@=�\x1A�\n' +
    '�\x05H�1����7h��d)�\x11Y�w`\\V�h��K��He�\n' +
    '�=<Ϭ�l+�:Cm\x007�V��Aa��Sؘ\x14�QP�8��W\x18R@�R+h.bq����("u�APru���\x1C�s�Uz�\x0B�\n' +
    '2���A�\x1B\x05�{+��\x14�\x15�Q�� �C\x14"��4\n' +
    '6\t�:i\r�Vp�EJ��\x14X\x1B�֔s\x15\x1A\x05u\x0BVQ3W�[-rj\x1F\x16�n�i|�=ͬ-V�>�mV�Sn��+�\x11N�c�-\x15\x05��\b��+�y����4H9rM�%\x02�l\n' +
    'G��U-n"���5��0Q��@ݦ�\r�髤��d��\x1AC��ũS�e\x0BӬ��\x00�k�ù�*Zɒ\r�ޔ\n' +
    "��+Z��\r&sb\x1F\x04�6�\x17\x01�i�zE�Kq5N��la��B[Y�ɋ������\f͸�\x12\x1BU_�-�\x00P�\x00�\x1A+'S/Xb��\x00��-�-KS���mA%D�/K�\x1D�n��\b�\x12Z��o\x19�`�t\x0B\x0B��S`��+��2l��N�*��=\x16��]��\x05c\x1ACiPʹp�\x1E�\n" +
    'nB�C�EF�2�償�\x13�(\\��q�\x07�������\x13��]�\x17F��\x1D�\x15��6F\x1E�\x04o\x1Bņ�x"$���օv�S�*y��\rW�\x1F\x06K\\4���X�Q����u�6\x05r�~�!�\x1A\x1EE��(�s\x12�i �K���"\x17�v%yp��"��\x12�1݄��\x1E{��qvAA\x19P�g\x06"�V���"eyf ]�м)�\n' +
    '�0M\x00PA���)C�́��\x16o\x0E�єA�F!��\x92"�Z!h|T�B��:�L\n' +
    '�\x04Q�\x05�B5\n' +
    "��+\x11;W��J�\x07V^!i��\x15�P�Η�:�+��9\x06\x1A\x17\x15�V�f�\x13#^A\x03;8'��6���`?\f�x�L�Z)�\x14쉑B�����=��2�BRp\x15'��Q�I`J���\x14�!G�P*L����K\n" +
    '��Ha{\x14\x12��(��$E��"��Pe\x10J\x11\x15�\x15���U\x16d+����6Z\x17�bT�`O�\x14�T����\x04\x15�NF�M<V�R�F�y�+\x14<A&�/\x15�RhZ�Щ\x04�еB\x16\n' +
    "\x19j� E*(\x11�\x1E��������s��\r�\x14���-M�|5�D�O'\x1E\t��\x05�\x03%���[��\x1A�}�C�\x0B�?�؟�\x13�#��;�C�?\x10^-�?f\\l�\x01\x16�5�b�\x11�t�\x12\x7F���\x06�4b\x06^\\4բ\x1Cp\x1A����H[-GF\x11h1��Y\x03���h\x14�mA����\x1F��f�\x1Eӏ��\n" +
    '^��ts�#@���^��x�Zߋ��z���Ԕ\x0B\x18\x02x�����\n' +
    '\x12\x1Ez�1@�:"��-\\+"^2��%\\���\x05�M,�P��\n' +
    "�\x03��\x1DE\x1A�x�0�F��KK��\x15�\x1E�=ya���\x81�m��|w�\x10�\x07wۺyHnMRD�\b�6�[\x07q��\x7F��'�\x13E���\x0FP\x11rE8N�\x07�qԽ�q�@[rx�\x1Bx��\x1Br 0U�i�\f����c>1\x14|⡚\x06\x19�Ӵ8\f���A�L��c\x14���\x1AE�b�i�\x02��m��\x0EςNx\x02Ɯ6ٍ�����\x1C/�j;\x1D\x06c�\x0E\x06��僖\x16g��5\\�\x1E�P�\\�f\x17DUsZ��\x01�������|\x18T�~n)=��9-�x�pA\x00|��G>�����u\x02��W�q\x00vJ�\x1C|\x1FENde7��'��M�G�i7��T���Œ\x0E�B\x16jL�d\x05���5\x18��E\b�\x7F\x17�\x1F�N^�iZ��/����&�P�V�`��^�Տ\x17��T-\x1E�����v\x15qG�7�[����Y�1�RQS�1�\x12�&�\x12�}\x17M]\x02��1ave\x1D�)\x0F�X�Apۮ\n" +
    '�ٱ�E\x1B\x07l�>ԍ�O\x14hً\x05E�\x0Bt\t\x07>�G���9�0���AY>�Wb���yhZq�\r\x7FO8U�@�*�M?v\x05��\x16���T��C4թ@�)��@Ai\x19\x15��F��((\x15#令�P\n' +
    '=\n' +
    '�:U�H�\x1EL�\n' +
    'J�\x18k*���t�\x1B\n' +
    '���8\n' +
    "eb2\x1A\x1D���\x02�l��L��[�|�I�(M\x034mi6��ӉZË�@�}\x7F�9�'�>�\x1E*���>V̝�\x0F3\x15eW�脍�\x07�bM������4�F�@����G.\n" +
    "�&C��\x11`�N��\x19��'\x07���\x04\x1E.�N�\x10%����!$���\x0E\f��e��\x11(o��\x10�xJ<X~P���+�pi�GzH�H\x15�OoC+�H;�\x1Eׇ�ɬ9{��r�}�#{��c��OC��\x13L��\x17�%h9�\x0E�Z:�Vq�\x07Q9��������#r\x15���V<^�#L�C��$���xl�����c����qK\x07\x1C\x13�dg�\\kw�ߖ�\x13~��\x037\x1F<?4\x1F\f���G�S��'\x02nM�q6����k�������������oM�E\x05oL�\x07?\x7Fa�e�)�\x7FM�y\x7F�W�e�����\x7F���C:�C�[��2?��\x1BDx���1\x18{W?��\x078%\rpI�x\x13��\x17�T�y�)���C~�\x1BW\x04�ʢՎ�ו�Cv�6��SI6�שL��7K*�7)*�\x1F<�$)l&񼷒bK���]�S��2T\x12�\x14��\x18��+��$\x1F�X�)$\x1B�X\x04��!��\x12�dc.�⺪,X\n" +
    'Y:�檱�0Ne:Ƞ�$cr�\x1A�IʨL�G�+I�<��2I9��H�X��r\x17�d\x16\x14�\x0F�T�4Y�:f�\x00��gqB�r��s\x04�dq\n' +
    'QH2���Y�\x02xt.��P�\x14�\x1C\x05��$>�^I&���&\x14�\r:\x17�\n' +
    "��\x11��\x15\x18�M�U�\x10��\x12\x01b�B\x10y��\x12����\x10&o�\x06jg\x1E\x15���Ea�ke�\f\x11L\x1EX����hJQd�\x06D���ʠ�4K^3J%\x17�e���}ފ@V�\x15�v��C�&@�Y�\x02�2-Y���t䬑�,� ��jo\x0B�6J\x16�\x0EE~���,�.�\x17�\x0B�&\x16��\f\x14�\x13:�-@\x16��^�B/�/�'�,�!�r�\x17�\x18��\x0B�\x1C����8�T����(��|Q�Y���8\x1Db!��\x1CM!C/�\n" +
    '9�\x17���2�[Yo��1��\x1FEhd\x1D��a\\REx��|!�Y�F\x16Y��rނQ�!�\x1Ft���\x0F�G\x15r�lQ\x16�=a�\x1E��-�\x1B\\(�\x07\x1D[��`[�*�G_�\x1F]���c�^��g�{�Y}G��\x1F�E�@\x16�\f��\x15�ն��/�S2�\x13Q��=\rx/�\b\x0FշH\x1F�\t�\\�\x17�X�\x0B���*o!+U�\x1F��B�*��\x07���;�\x00y\x7F�����e!\x0B��\tW��pJ�B֙\x0F�r0y���\x11E��\x0B]Ȫ(?\x01\x0Eb\x11����>�B�\x12*���BY\x17�!���\x1CB\x19>�"=�5\x15���\x15��\x17�W�(_쎋��\x1E��K>�_���"<�wE�A�"}A��\x15�+�ѕ鍶�O"�2�(]�\x0Fy{�\x07vc~?Y��(ۖ,�-dY��T���K]�\x17 �\x9E0+)����B\x0E�=��*Ͽ\x14�H��?\rӥo�߃yԯ��I�4�\x7F�W��\x14����r,O��x �~�\x13ρm��+��Бoۼ�*\x0F�\x13%|��7�|�jf`y(��Y~�\x17�)�\x0B��U�vl���ވ�2O���\x7F�2OO?xYw����y��\x1D\'\x0F��\x01�/�`ע�|M��\x03�><[���o���,]���U?\x1F������\x15��\x16�ÿ��y�\t{�28�o�\x85߷�R�2O@�~�2o�D����Ѿ�\x18���\x0B?\x01U�\'�o��z\x07�\'�����\x06�5��l��\rrV�?�����NT����8>x\x7F:\x19�~|�,�"���\f��u2��|��|ڶ~�Y:�2y\'�5�{|wl��q|�-�7SU��C��a�Ž�߾�fM%=��u�q\\��}*���}ј۟n�||�V2{�ܚ��l��\x0Fݾ\r�d�c\x05�X~��ː�m �\x10\x1D���,L����G�\b\x0F���vP*:z��\x0F\x1D��n窸�7��\x0E\x1D\x12\x0B�Tj�x9�Ie��PB�"U\x16�F�F�\x1Bڤ�6G|L�g(҂\t�Fm��1\x06�^\x18��@��M�����<�5�\x05)�F��Bu\x11y�\x1E[��\bG�\x14�������\t���\x1B��(�H�V�\x18�N�dHZ�\x0E��\t�T]U�\x15|�>\x14D�U��,�\x0B���|�c(Oi�\x14ey\x12REy6H\x15H��.��\x7F�t@�\x15*X\'[�\x12z\x02˳I�r"�rW��>QIZ�\r\x1D\x12\x0BҲn�t�\r*B���\x1A=�e��֨y�<���dY[k��(��NcP�,\x14\f{�\x15*�\'�RY�\x03�6�ӝ�1�.(�8��A��8��x�h\x1C5�\x05��T��"[�L�\x18j+�-[c%��om��<�|��HzBY(�g\r�P\t=ɵ5�\x0B\x06}+�\t\x1D���Seӯ�q�V�\x1D�ȇ\x0E�\x051�T�?\x1A����;\x12�P[��\x1E�̑,��\x06�.ʓ�oo,��P\x16�8�Z�\x00=��P�n\x18(�\x05C���Wf�ן�\r\x06S\x13m�+�t��0�ni\x02>�HEaZ\x1A��E�\x7F��sC����H\x13A#sML\x1A%K�t6�Gc\n' +
    'D��\x07.Q#\x04ht��4q�tm\r�a�̢[\x1A�\x17i���-��I\x13ۚ�4^��f-oV��-�L\x1Ak[\x1A�U�ĶF�kT皘����\x0B\rI�Ѯ�\taR=d^j���&�)$�!�\b�l\x1E��\x0F���Ƞ�}��/\x1F}{6����ik���x\x1C3;�WS�\x1F!�i�\x0F%�4�P|\n' +
    ')�о\x18����Ɗ�� sM}v ����\x0Bፓ��*׹\x1BP�\x1D�h��\x1D;\x00�ݼ\x01-\x0E�&�ð��tc02�Nހ��C��>v�� e=\x14��n\x1A���\x1B��=�\t�8\r[���SMUO\x19\x0B�{�\x18��)M��S�5͏n7T���!��W:׭%J*Փ2\x19zj�\n' +
    'N��,�^jc\x1Fվ[�\x14T�nXa���<x�P�KC�1v�P�K��œ\f5�\x0F�6T��̀F�\x13V�>*U7�D;6\x03*MO�d�}ac�/�.�^��\x17��KYz�w��nM��.���E�;-\x00����\x07�?���\x7F\x05���b�j��\x7F�v�1R��=�\x1Aa{�n�h�=1��\bpCC��H�k�\x0B����7�G�\x1Aj��\x10��W����)�Ce7\x17�-�ء���\x1EE�v�\x16�����4U���J��֛Nzq�P�Pi]�f@��\t\x1B��\t\x0Bs�N\x19\x03\x15�� mtZ����sCU�\x0E@E�>H|�Z_����Ѫ�S�\\(��#$Q�mY@���M\x15\x07k+\x1AU����$k{�p��ވ#r\x0F���\x0F)�F�\\D<��CE��&\x1AlO.dl{��b��\x02�Q�:���N���\r�-\x16��b\'e@���\f\x17h��\x0EQ�z�\x06A;�+ ݲ\x00*�>\x01��-�\x00]��W��\x18@T�>\x1Aڣ\x1E�ؗ\x0B���N��\x10w���$��7�[��V\x07�Ǿ��ٮ}����2��\b^��n�\x99|wl\x01�{i�3�Is{D��b�\x1D�G�W�n���Y�\r�Ԭ;B\x06��0�����ܫӿ�i���-:0��xwൟ�Ń�Wg��{0��l�\x0F\x0F�ߜM�����\x1EL\x7F���o\x1E��`6���?6�~cv\x7F\x1F���G��l��&������/O\x7F07���\x05��"��\x00\x00'
]

console.log(processEscapedSegment(escapedStr));
