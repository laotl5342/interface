import { DdRum, RumActionType } from '@datadog/mobile-react-native'
import { DDRumAction } from 'utilities/src/logger/datadog/datadogEvents'

// eslint-disable-next-line max-params
export function logContextUpdate(contextName: string, newState: unknown, _isDatadogEnabled: boolean): void {
  if (__DEV__) {
    return
  }

  DdRum.addAction(RumActionType.CUSTOM, DDRumAction.Context(contextName), {
    newState,
  }).catch(() => undefined)
}
