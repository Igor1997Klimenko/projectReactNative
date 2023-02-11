import { useEffect } from "react";
import {  Dimensions } from 'react-native';

const hookAuth = () => {
    const [dimensions, setDimensions] = useState(
        Dimensions.get('window').width - 16 * 2);

    useEffect(() => {
        const onChange = () => {
          const width = Dimensions.get('window').width - 16 * 2;
          setDimensions(width)
        }
        Dimensions.addEventListener('change', onChange);
        return () => {
        Dimensions.removeEventListener('change', onChange);
        }
      }, [])
      return dimensions;
}

export default hookAuth;