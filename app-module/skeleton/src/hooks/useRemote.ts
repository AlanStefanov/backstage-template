import * as React from 'react';
import { http, state } from '@tenpo/lib-core';
import { HookData, HookStatus } from '@tenpo/lib-core';

function useRemote(): HookData {
  const dispatch = state.useDispatch();
  const value = state.useModuleSelector('${{ parameters.moduleName }}', 'remote', 'selectValue');
  const [status, setStatus] = React.useState<HookStatus>('NOT_LOADED');
  const [abort, setAbort] = React.useState<AbortController>();

  React.useEffect(() => {
    if (status === 'NOT_LOADED') {
      setStatus('LOADING');
      const c = new AbortController();
      setAbort(c);
      const httpReq = http
        .getPublicClient()
        ?.get('/v1/device-management/devices/init-params', {}, c);

      httpReq
        .then((resp: any) => {
          setStatus('LOADED');
          dispatch(
            state.getAction(
              '${{ parameters.moduleName }}',
              'remote',
              'setValue',
            )(JSON.stringify(resp.data)),
          );
        })
        .catch(err => {
          setStatus('ERROR');
          dispatch(
            state.getAction(
              '${{ parameters.moduleName }}',
              'remote',
              'setValue',
            )('value has an error: ' + err.message),
          );
        });
    }
  }, [status, dispatch]);

  const abortFunction = React.useCallback(() => {
    if (abort) {
      abort.abort();
    }
  }, [abort]);

  return {
    data: value,
    status,
    reload: () => {
      setStatus('NOT_LOADED');
      dispatch(
        state.getAction('${{ parameters.moduleName }}', 'remote', 'setValue')('value not loaded'),
      );
    },
    abort: abortFunction,
  };
}

export default useRemote;
