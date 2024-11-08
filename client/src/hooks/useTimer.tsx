import {useState, useEffect, useRef} from 'react'

interface UseTimerOptions {
    initialTime?: number;
    countDown?: boolean;
}
  
interface UseTimerReturn {
    time: number;
    isActive: boolean;
    start: () => void;
    pause: () => void;
    reset: () => void;
}

const useTimer = ({initialTime = 0, countDown = false}: UseTimerOptions) => {
    const [time, setTime] = useState(initialTime);
    const [isActive, setIsActive] = useState(false);
    const timerRef = useRef<NodeJS.Timeout | null>(null); // Reference for the interval
  
    useEffect(() => {
      // If the timer is active, start the interval
      if (isActive) {
        timerRef.current = setInterval(() => {
          setTime((prevTime) => {
            // Count down if countDown is true, otherwise count up
            return countDown ? prevTime - 1 : prevTime + 1;
          });
        }, 1000);
      } else {
        clearInterval(timerRef.current);
      }
  
      // Cleanup interval on component unmount
      return () => clearInterval(timerRef.current);
    }, [isActive, countDown]);
  
    useEffect(() => {
      // Stop timer when it reaches zero (for countdown mode)
      if (countDown && time <= 0) {
        clearInterval(timerRef.current);
        setIsActive(false);
      }
    }, [time, countDown]);
  
    const start = () => setIsActive(true);
    const pause = () => setIsActive(false);
    const reset = () => {
      setIsActive(false);
      setTime(initialTime);
    };
  
    return { time, isActive, start, pause, reset } as UseTimerReturn;
}
  
export default useTimer;