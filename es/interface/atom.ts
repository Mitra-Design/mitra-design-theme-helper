import type { PresetColorType } from './presetColor';

export interface AtomToken extends PresetColorType {
    // ============   Color   ============

    /**
     * 主色
     *
     * @desc 在你完成主色的选取之后，我们会自动帮你生成一套完整的色板，并赋予它们有效的设计语义
     */
    colorPrimary: string;

    /**
     * 成功色
     *
     * @desc 用于表示操作成功的颜色
     */
    colorSuccess: string;

    /**
     * 警告色
     *
     * @desc 用于表示操作警告的颜色
     */
    colorWarning: string;

    /**
     * 错误色
     *
     * @desc 用于表示操作失败的颜色
     */
    colorError: string;

    /**
     * 禁用色
     *
     * @desc 用于表示禁用状态的颜色
     */
    colorDisabled: string;

    /**
     * 白色
     *
     * @desc 用于表示纯白色
     */
    colorWhite: string;

    /**
     * 中性色1
     *
     * @desc 用于表示中性色
     */
    colorNeutral1: string;

    /**
     * 中性色2
     *
     * @desc 用于表示中性色
     */
    colorNeutral2: string;

    /**
     * 中性色3
     *
     * @desc 用于表示中性色
     */
    colorNeutral3: string;

    /**
     * 中性色4
     *
     * @desc 用于表示中性色
     */
    colorNeutral4: string;

    /**
     * 中性色5
     *
     * @desc 用于表示中性色
     */
    colorNeutral5: string;

    /**
     * 中性色6
     *
     * @desc 用于表示中性色
     */
    colorNeutral6: string;

    /**
     * 中性色7
     *
     * @desc 用于表示中性色
     */
    colorNeutral7: string;

    /**
     * 中性色8
     *
     * @desc 用于表示中性色
     */
    colorNeutral8: string;

    /**
     * 中性色9
     *
     * @desc 用于表示中性色
     */
    colorNeutral9: string;

    /**
     * 中性色10
     *
     * @desc 用于表示中性色
     */
    colorNeutral10: string;

    // ============   Font   ============

    /**
     * 默认字体大小
     *
     * @desc 最基础的文字大小，通常用于正文，文本梯度基于此字体大小
     */
    fontSize: number;

    // ============   Size   ============

    /**
     * 通用 size 高度/宽度
     *
     * @desc 用于按钮、输入框等有 size 属性的组件，对应不同的高度/宽度
     */
    size: number;

    // ============   Radius   ============

    /**
     * 默认圆角大小
     *
     * @desc 用于按钮、输入框、卡片等组件的圆角大小
     */
    borderRadius: number;

    // ============   Shadow   ============

    /**
     * 阴影基础颜色
     *
     * @desc 用于生成阴影的基础颜色
     */
    shadowBaseColor: string;
}
