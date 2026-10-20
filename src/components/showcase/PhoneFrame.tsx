'use client';

import { useEffect, useRef, useState, type ReactNode } from 'react';
import s from './Phone.module.css';

/** Navy bezel, 360 × 760 screen, status bar, island and home indicator. Scales as one unit to fit its column. */
export function PhoneFrame({ children }: { children: ReactNode }) {
  const box = useRef<HTMLDivElement>(null);
  const [scale, setScale] = useState(1);

  useEffect(() => {
    const el = box.current;
    if (!el) return;
    const update = () => setScale(Math.min(1, el.clientWidth / 380));
    update();
    const ro = new ResizeObserver(update);
    ro.observe(el);
    return () => ro.disconnect();
  }, []);

  return (
    <div ref={box} className={s.box}>
      <div className={s.scaler} style={{ transform: `scale(${scale})` }}>
        <div className={s.bezel}>
          <div className={`kw-app ${s.screen}`}>
            <div className={s.status} aria-hidden="true">
              <span>9:41</span>
              <span className={s.island} />
              <span className={s.statusIcons}>
                <img src="/kinnoc/illustrations/device/status-signal.svg" width={18} height={12} alt="" />
                <img src="/kinnoc/illustrations/device/status-wifi.svg" width={16} height={12} alt="" />
                <img src="/kinnoc/illustrations/device/status-battery.svg" width={26} height={12} alt="" />
              </span>
            </div>
            {children}
            <span className={s.homeBar} aria-hidden="true" />
          </div>
        </div>
      </div>
    </div>
  );
}
