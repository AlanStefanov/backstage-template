import { base } from '@tenpo/lib-extensible-duck';
import type { PayloadAction, IBaseState } from '@tenpo/lib-extensible-duck';

interface LocalState extends IBaseState {
  value: string;
}

export default base<LocalState>({
  namespace: '@tenpo-${{ parameters.moduleName }}',
  store: 'local',
  initialState: {
    value: '',
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
