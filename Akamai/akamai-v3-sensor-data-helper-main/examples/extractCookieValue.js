const akamaiHelper = require('../src');

console.log(
    akamaiHelper.extractCookieHash(
        'A81D6E32198C9791CF1DC677B3966883~YAAQBPcSAikLfvaVAQAATOHi/ht2PMpbBNlo0HX/lLfqPKgYXXyhcnxKfaokKo4jpJ86i+0ltprXEaNnByKOS5SUCvPkBgGXwQgUkNxR/314x0ATFHeJ5lbQmBDVXoBwHjmiHuNZeAzfTCiDauZqPtF/4qf+Auwk6rPuaFQMozjEl8qf9UK2u78KI9p64kNcw7Qz1cNuQq2kbnefzGqksg7dX8kylWgZLWmIwV+p+aioj8b9vc8ihJ6ePK9xlJN+V/twCYj/saj/O3EGLg/CPHcdH4NIqIfiqgkFLMqUAnaYgzPClMVGsZ1ookgRo8F+nF8taScVgv85QnlGkFCNTbKcff+E1aPc4NniYhvNmAG3g9CZtoRv1w44T7jYcavt3fzZuH+LbPldNNiVrJHqr77U1dJkfqaUa9HkmNL36pypKFgDNLDJZ/9aJ4n/EvEHg3t2IyDk~3753014~4470068'
    )
)

// Phân tích Cookie Akamai để lấy giá trị băm
/**

    * Decrypts Akamai v3 sensor data
    Các Cookie Phân tích với nhau bằng dấu ngã (~)
    Cookie này được lấy từ giá trị của bm_sz
    Cookie Ví dụ:  'A81D6E32198C9791CF1DC677B3966883~YAAQBPcSAikLfvaVAQAATOHi/ht2PMpbBNlo0HX/lLfqPKgYXXyhcnxKfaokKo4jpJ86i+0ltprXEaNnByKOS5SUCvPkBgGXwQgUkNxR/314x0ATFHeJ5lbQmBDVXoBwHjmiHuNZeAzfTCiDauZqPtF/4qf+Auwk6rPuaFQMozjEl8qf9UK2u78KI9p64kNcw7Qz1cNuQq2kbnefzGqksg7dX8kylWgZLWmIwV+p+aioj8b9vc8ihJ6ePK9xlJN+V/twCYj/saj/O3EGLg/CPHcdH4NIqIfiqgkFLMqUAnaYgzPClMVGsZ1ookgRo8F+nF8taScVgv85QnlGkFCNTbKcff+E1aPc4NniYhvNmAG3g9CZtoRv1w44T7jYcavt3fzZuH+LbPldNNiVrJHqr77U1dJkfqaUa9HkmNL36pypKFgDNLDJZ/9aJ4n/EvEHg3t2IyDk~3753014~4470068'
    
    1: A81D6E32198C9791CF1DC677B3966883
    2: YAAQBPcSAikLfvaVAQAATOHi/ht2PMpbBNlo0HX/lLfqPKgYXXyhcnxKfaokKo4jpJ86i+0ltprXEaNnByKOS5SUCvPkBgGXwQgUkNxR/314x0ATFHeJ5lbQmBDVXoBwHjmiHuNZeAzfTCiDauZqPtF/4qf+Auwk6rPuaFQMozjEl8qf9UK2u78KI9p64kNcw7Qz1cNuQq2kbnefzGqksg7dX8kylWgZLWmIwV+p+aioj8b9vc8ihJ6ePK9xlJN+V/twCYj/saj/O3EGLg/CPHcdH4NIqIfiqgkFLMqUAnaYgzPClMVGsZ1ookgRo8F+nF8taScVgv85QnlGkFCNTbKcff+E1aPc4NniYhvNmAG3g9CZtoRv1w44T7jYcavt3fzZuH+LbPldNNiVrJHqr77U1dJkfqaUa9HkmNL36pypKFgDNLDJZ/9aJ4n/EvEHg3t2IyDk
    3: 3753014
    4: 4470068


**/
