import { useEffect } from 'react';
import type { RefObject } from 'react';

export const useOverlayHeight = (
  contentWrapperRef: RefObject<HTMLDivElement | null>,
  overlayRef: RefObject<HTMLDivElement | null>
) => {
  useEffect(() => {
    const updateOverlayHeight = () => {
      if (overlayRef.current && contentWrapperRef.current) {
        const contentHeight = contentWrapperRef.current.scrollHeight;
        overlayRef.current.style.height = `${contentHeight}px`;
      }
    };

    updateOverlayHeight();

    const resizeObserver = new ResizeObserver(updateOverlayHeight);
    if (contentWrapperRef.current) {
      resizeObserver.observe(contentWrapperRef.current);
    }

    return () => {
      resizeObserver.disconnect();
    };
  }, [contentWrapperRef, overlayRef]);
};
