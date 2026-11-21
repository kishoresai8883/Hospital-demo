import React, { useState } from 'react';
import { LocalHospital as LocalHospitalIcon } from '@mui/icons-material';

interface HospitalImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  fallbackLabel?: string;
}

export const HospitalImage: React.FC<HospitalImageProps> = ({
  src,
  alt,
  className = '',
  fallbackLabel,
  ...rest
}) => {
  const [hasError, setHasError] = useState(false);

  if (hasError || !src) {
    return (
      <div
        className={`flex flex-col items-center justify-center bg-gradient-to-br from-[#e1eddf] to-[#6fcfcf]/30 text-[#303030] p-4 text-center ${className}`}
        role="img"
        aria-label={alt || fallbackLabel || 'Dhanvvantrri Hospital'}
      >
        <LocalHospitalIcon sx={{ fontSize: 36, color: '#4bc3c3', mb: 1 }} />
        <span className="font-inter text-xs font-semibold text-neutral-700">
          {fallbackLabel || alt || 'Dhanvvantrri Hospital'}
        </span>
      </div>
    );
  }

  return (
    <img
      src={src}
      alt={alt || 'Dhanvvantrri Hospital'}
      referrerPolicy="no-referrer"
      onError={() => setHasError(true)}
      className={className}
      {...rest}
    />
  );
};
