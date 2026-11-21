import React from 'react';

interface LogoProps {
  variant?: 'light' | 'dark';
  size?: 'sm' | 'md' | 'lg';
  showSubtitle?: boolean;
  className?: string;
}

export const Logo: React.FC<LogoProps> = ({
  variant = 'dark',
  size = 'md',
  showSubtitle = true,
  className = '',
}) => {
  const isLight = variant === 'light';

  // Size configurations
  const iconSizes = {
    sm: 'w-8 h-8',
    md: 'w-10 h-10',
    lg: 'w-12 h-12',
  };

  const textSizes = {
    sm: 'text-lg',
    md: 'text-2xl lg:text-[26px]',
    lg: 'text-3xl lg:text-[32px]',
  };

  const subtitleSizes = {
    sm: 'text-[9px]',
    md: 'text-[11px]',
    lg: 'text-[13px]',
  };

  return (
    <div className={`inline-flex items-center gap-2.5 select-none ${className}`}>
      {/* Brand Icon Badge */}
      <div
        className={`${iconSizes[size]} shrink-0 rounded-[10px] flex items-center justify-center relative shadow-sm overflow-hidden`}
        style={{
          background: 'linear-gradient(135deg, #4bc3c3 0%, #97e078 100%)',
        }}
      >
        {/* Modern Medical Cross with Heartbeat Wave SVG */}
        <svg
          viewBox="0 0 24 24"
          className="w-3/5 h-3/5 text-white"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          {/* Symmetrical Rounded Medical Cross */}
          <path d="M12 4v16m-8-8h16" />
          {/* Subtle central dot */}
          <circle cx="12" cy="12" r="1.5" fill="currentColor" stroke="none" />
        </svg>
      </div>

      {/* Brand Text */}
      <div className="flex flex-col leading-none">
        <div
          className={`font-inter font-bold tracking-tight ${textSizes[size]} flex items-center gap-1.5`}
        >
          <span className={isLight ? 'text-white' : 'text-[#1e293b]'}>Demo</span>
          <span
            className={
              isLight
                ? 'text-[#97e078]'
                : 'text-[#30adad] drop-shadow-xs'
            }
          >
            Logo
          </span>
        </div>
        {showSubtitle && (
          <span
            className={`font-opensans font-medium uppercase tracking-[0.16em] mt-1 ${subtitleSizes[size]} ${
              isLight ? 'text-white/80' : 'text-neutral-500'
            }`}
          >
            Hospitals &amp; Healthcare
          </span>
        )}
      </div>
    </div>
  );
};
