import Vue, { PropType } from 'vue';
import { CalendarPresetsMethods, CalendarPresetsProps, DateValue } from './interface';
import { DatePickerConfig } from '../config-provider/config-receiver';
import { Button as TButton } from '../button';
import { prefix } from '../config';

export default Vue.extend<{}, CalendarPresetsMethods, {}, CalendarPresetsProps>({
  components: {
    TButton,
  },
  props: {
    global: {
      type: Object as PropType<DatePickerConfig>,
    },
    presets: {
      type: Object as PropType<CalendarPresetsProps['presets']>,
    },
    onClick: Function,
  },
  methods: {
    clickPreset(value: DateValue) {
      this.onClick(value);
    },
  },
  render() {
    const { presets } = this;
    return (
      <div class={`${prefix}-date-picker__presets`}>
        <ul>
        {presets && Object.keys(presets).map((key: string) => (
            <li key={key}>
              <a onClick={() => this.clickPreset(presets[key])}>{ key }</a>
            </li>
        ))}
        </ul>
      </div>
    );
  },
});
