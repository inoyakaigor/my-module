var ua = typeof window !== 'undefined' && window.navigator && window.navigator.userAgent;
export var windowsPhone = ua && /IEMobile|Windows Phone/i.test(ua);
export var ios = ua && /iPhone|iPad|iPod/i.test(ua) && !windowsPhone;
export var android = ua && /Android/i.test(ua) && !windowsPhone;