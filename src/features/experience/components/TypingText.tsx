import { useState, useEffect, useRef } from 'react';

import styled from '@emotion/styled';
import { motion, AnimatePresence } from 'framer-motion';

interface ITypingTextProps {
  text: string;
  speed?: number;
  onComplete?: () => void;
}

const TypingText = ({ text, speed = 30, onComplete }: ITypingTextProps) => {
  const [displayedText, setDisplayedText] = useState('');
  const [isComplete, setIsComplete] = useState(false);
  const onCompleteRef = useRef(onComplete);

  // 콜백 최신 상태 유지
  useEffect(() => {
    onCompleteRef.current = onComplete;
  }, [onComplete]);

  useEffect(() => {
    let index = 0;
    setDisplayedText('');
    setIsComplete(false);

    const timer = setInterval(() => {
      if (index < text.length) {
        setDisplayedText(text.slice(0, index + 1));
        index++;
      } else {
        clearInterval(timer);
        setIsComplete(true);
        onCompleteRef.current?.();
      }
    }, speed);

    return () => clearInterval(timer);
  }, [text, speed]);

  return (
    <AnimatePresence mode='wait'>
      <TextWrapper
        key={text}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.3 }}
      >
        {displayedText}
        {/* 타이핑 중에만 커서 표시 */}
        {!isComplete && (
          <Cursor
            animate={{ opacity: [1, 0] }}
            transition={{ duration: 0.5, repeat: Infinity }}
          >
            |
          </Cursor>
        )}
      </TextWrapper>
    </AnimatePresence>
  );
};

export default TypingText;

const TextWrapper = styled(motion.span)`
  font-family: 'Pretendard', sans-serif;
`;

const Cursor = styled(motion.span)`
  margin-left: 2px;
  font-weight: 100;
`;
