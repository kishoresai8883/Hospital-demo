import React, { useState } from 'react';
import { LocalHospital as LocalHospitalIcon } from '@mui/icons-material';

interface HospitalImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  fallbackLabel?: string;
}

export const getAssetUrl = (url?: string): string => {
  if (!url) return '';
  if (url.startsWith('http://') || url.startsWith('https://') || url.startsWith('data:') || url.startsWith('blob:')) {
    return url;
  }
  const cleanPath = url.startsWith('/') ? url.slice(1) : url;
  const base = import.meta.env.BASE_URL || '/';
  return base.endsWith('/') ? `${base}${cleanPath}` : `${base}/${cleanPath}`;
};

export const HospitalImage: React.FC<HospitalImageProps> = ({
  src,
  alt,
  className = '',
  fallbackLabel,
  ...rest
}) => {
  const [hasError, setHasError] = useState(false);
  const resolvedSrc = getAssetUrl(src);

  if (hasError || !resolvedSrc) {
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
      src={resolvedSrc}
      alt={alt || 'Dhanvvantrri Hospital'}
      referrerPolicy="no-referrer"
      onError={() => setHasError(true)}
      className={className}
      {...rest}
    />
  );
};
