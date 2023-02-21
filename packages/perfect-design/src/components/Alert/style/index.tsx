import styled from 'styled-components'
import { commonStyle } from '../../../styles/common'

const prefectLightInfoBg = '#e8f3ff',
	prefectLightSuccessBg = '#e8ffea',
	prefectLightWarningBg = '#fef7e8',
	prefectLightErrorBg = '#feece8',
	prefectDarkInfoBg = '#253757',
	prefectDarkSuccessBg = '#22482c',
	prefectDarkWarningBg = '#573d25',
	prefectDarkErrorBg = '#553332',
	prefectLightContentColor = '#4e5969',
	prefectLightTitleColor = '#1d2129',
	prefectDarkContentColor = '#ffffffb3',
	prefectDarkTitleColor = '#ffffff'

const {
	prefectFontMd,
	prefectRadiusXs,
	prefectPrimaryColor,
	prefectInfoColor,
	prefectWarningColor,
	prefectDangerColor,
	prefectFontLg,
	prefectFontXs,
	prefectTransformSm
} = commonStyle

// 基准样式
const baseStyle = `
.prefect-alert,
.prefect-dark-alert {
  padding: 12px 15px;
  font-size: ${prefectFontMd};
  text-align: left;
  display: flex;
  border-radius: ${prefectRadiusXs};
  justify-content: space-between;

  .alert-content {
    display: flex;
    color: ${prefectLightContentColor};

    .alert-icon {
      margin-right: ${prefectTransformSm};

      &-info {
        color: ${prefectPrimaryColor};
      }

      &-success {
        color: ${prefectInfoColor};
      }

      &-warning {
        color: ${prefectWarningColor};
      }

      &-error {
        color: ${prefectDangerColor};
      }
    }

    .alert-text {
      display: flex;
      flex-direction: column;

      .title {
        font-size: ${prefectFontLg};
        margin-bottom: ${prefectTransformSm};
        color: ${prefectLightTitleColor};
      }
    }
  }

  .close-icon {
    font-size: ${prefectFontXs};
    cursor: pointer;
  }
}

.prefect-dark-alert-info {
  background-color: ${prefectDarkInfoBg};
}

.prefect-dark-alert-success {
  background-color: ${prefectDarkSuccessBg};
}

.prefect-dark-alert-warning {
  background-color: ${prefectDarkWarningBg};
}

.prefect-dark-alert-error {
  background-color: ${prefectDarkErrorBg};
}

.prefect-alert-info {
  background-color: ${prefectLightInfoBg};
}

.prefect-alert-success {
  background-color: ${prefectLightSuccessBg};
}

.prefect-alert-warning {
  background-color: ${prefectLightWarningBg};
}

.prefect-alert-error {
  background-color: ${prefectLightErrorBg};
}

.prefect-dark-alert {
  .alert-content {
    color: ${prefectDarkContentColor};

    .alert-text .title {
      color: ${prefectDarkTitleColor};
    }
  }
}
`

// 动画样式
const animationStyle = `
.fadeContent-enter,
.fadeContent-appear {
  opacity: 0;
}

.fadeContent-enter-active,
.fadeContent-appear-active {
  opacity: 1;
  transition: opacity 200ms;
}

.fadeContent-exit {
  opacity: 1;
}

.fadeContent-exit-active {
  opacity: 0;
  transition: opacity 200ms;
}
`

const AlertStyle = styled.div`
	${baseStyle}
	${animationStyle}
`

export { AlertStyle }
