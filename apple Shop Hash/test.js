function RanTimeZone() {
  const countries = [
        { code: 'VN', name: 'Việt Nam', locale: 'vi-VN', timezone: 'Asia/Ho_Chi_Minh' },
        { code: 'US', name: 'Mỹ', locale: 'en-US', timezone: 'America/New_York' },
        { code: 'FR', name: 'Pháp', locale: 'fr-FR', timezone: 'Europe/Paris' },
        { code: 'DE', name: 'Đức', locale: 'de-DE', timezone: 'Europe/Berlin' },
        { code: 'JP', name: 'Nhật Bản', locale: 'ja-JP', timezone: 'Asia/Tokyo' },
        { code: 'GB', name: 'Anh', locale: 'en-GB', timezone: 'Europe/London' },
        { code: 'AU', name: 'Úc', locale: 'en-AU', timezone: 'Australia/Sydney' },
        { code: 'BR', name: 'Brazil', locale: 'pt-BR', timezone: 'America/Sao_Paulo' },
        { code: 'IN', name: 'Ấn Độ', locale: 'hi-IN', timezone: 'Asia/Kolkata' },
        { code: 'CN', name: 'Trung Quốc', locale: 'zh-CN', timezone: 'Asia/Shanghai' }
    ];
    function getGMTOffset(timezone) {
        const formatter = new Intl.DateTimeFormat('en-US', {
            timeZone: timezone,
            timeZoneName: 'short'
        });
        const parts = formatter.formatToParts(new Date());
        return parts.find(p => p.type === 'timeZoneName')?.value || 'GMT';
    }
    function formatLocalTime(locale, timezone) {
        return new Intl.DateTimeFormat(locale, {
            timeZone: timezone,
            weekday: 'long',
            year: 'numeric',
            month: 'long',
            day: 'numeric',
            hour: '2-digit',
            minute: '2-digit',
            second: '2-digit',
            timeZoneName: 'short'
        }).format(new Date());
    }

    

    const randomCountry = countries[Math.floor(Math.random() * countries.length)];
    const { locale, timezone } = randomCountry;
    const gmt = getGMTOffset(timezone);
    const localTime = formatLocalTime(locale, timezone);
    console.log('🕐 GMT:', gmt);
    console.log('🕰️  Giờ hiện tại:', localTime);
    console.log('---');

    return { GMT: gmt, timezone: localTime };
}

console.log(RanTimeZone());
