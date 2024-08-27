import { base } from '@tenpo/lib-extensible-duck';
import type { PayloadAction, IBaseState } from '@tenpo/lib-extensible-duck';

interface RemoteState extends IBaseState {
  value: string;
}

export default base<RemoteState>({
  namespace: '@tenpo-${{ parameters.moduleName }}',
  store: 'remote',
  initialState: {
    value: 'value not loaded',
  },
}).extend({
  reducers: ({ consts: { statuses } }) => ({
    setValue: (state, action: PayloadAction<string>) => {
      state.value = action.payload;

      state.status = statuses.SET;
    },
  }),
  selectors: duck => ({
    selectValue: state => state[duck.storePath].value,
  }),
});
