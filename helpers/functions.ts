import { WeatherStatus, ConditionNames } from 'report.types';
import { SurfConditionStatus } from 'report.types';
import { conditionBackgroundColors, conditionBorderColors } from 'report.types';

export const getImgURL = (weatherStatus: WeatherStatus): string => {
  switch (weatherStatus) {
    case 'rain':
      return '/assets/images/weather-icons/rainy-3.png';
    case 'hail':
      return '/assets/images/weather-icons/hail.png';
    case 'snow':
      return '/assets/images/weather-icons/snow.png';
    case 'sunny':
      return '/assets/images/weather-icons/sunny.png';
    case 'windy':
      return '/assets/images/weather-icons/windy.png';
    default:
      return '/assets/images/weather-icons/clear-day.png';
  }
};

interface ConditionRenderInfo {
  condition: SurfConditionStatus;
  colors: {
    light: conditionBackgroundColors;
    dark: conditionBorderColors;
  };
}

export const getConditions = (
  currentFlow: number,
  goodFlow: number,
  fairFlow: number
): ConditionRenderInfo => {
  if (currentFlow >= goodFlow) {
    return {
      condition: 'Good',
      colors: {
        light: 'bg-chartGood',
        dark: 'bg-chartGoodBorder',
      },
    };
  } else if (currentFlow <= goodFlow && currentFlow >= fairFlow) {
    return {
      condition: 'Fair',
      colors: {
        light: 'bg-chartFair',
        dark: 'bg-chartFairBorder',
      },
    };
  } else {
    return {
      condition: 'Poor',
      colors: {
        light: 'bg-chartBad',
        dark: 'bg-chartBadBorder',
      },
    };
  }
};

export const getSurfStatusStyles = (conditions: SurfConditionStatus) => {
  return (
    (conditions === 'Poor' && 'bg-chartBadBorder') ||
    (conditions === 'Good' && ' bg-chartGoodBorder ') ||
    (conditions === 'Fair' && ' bg-chartFairBorder')
  );
};
