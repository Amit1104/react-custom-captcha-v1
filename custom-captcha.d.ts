// custom-captcha.d.ts

declare module 'custom-captcha/dist/CustomCaptcha' {
    import { FC } from 'react';
  
    interface CustomCaptchaProps {
      captcha: string;
      onReload: () => void;
    }
  
    const CustomCaptcha: FC<CustomCaptchaProps>;
  
    export default CustomCaptcha;
  }
  