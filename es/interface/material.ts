export interface ColorMaterialToken {
    // ============   colorPrimary   ============

    /**
     * 主色 - 悬停
     *
     * @desc 主色对应的悬停状态颜色
     */
    colorPrimaryHover: string;

    /**
     * 主色 - 激活
     *
     * @desc 主色对应的激活状态颜色
     */
    colorPrimaryActive: string;

    /**
     * 主色 - 特殊
     *
     * @desc 主色对应的特殊状态颜色
     */
    colorPrimarySpecial: string;

    /**
     * 主色 - 禁用
     *
     * @desc 主色对应的禁用状态颜色
     */
    colorPrimaryDisabled: string;

    /**
     * 主色 - 边框
     *
     * @desc 主色对应的边框颜色
     */
    colorPrimaryBorder: string;

    /**
     * 主色 - 浅色背景
     *
     * @desc 主色的浅色背景颜色
     */
    colorPrimaryLightBg: string;

    /**
     * 主色 - 优先
     *
     * @desc 不随主题变化的主色
     */
    colorPrimaryPrior: string;

    // ============   colorSuccess   ============

    /**
     * 成功色 - 悬停
     *
     * @desc 成功色对应的悬停状态颜色
     */
    colorSuccessHover: string;

    /**
     * 成功色 - 激活
     *
     * @desc 成功色对应的激活状态颜色
     */
    colorSuccessActive: string;

    /**
     * 成功色 - 特殊
     *
     * @desc 成功色对应的特殊状态颜色
     */
    colorSuccessSpecial: string;

    /**
     * 成功色 - 禁用
     *
     * @desc 成功色对应的禁用状态颜色
     */
    colorSuccessDisabled: string;

    /**
     * 成功色 - 边框
     *
     * @desc 成功色对应的边框颜色
     */
    colorSuccessBorder: string;

    /**
     * 成功色 - 浅色背景
     *
     * @desc 成功色的浅色背景颜色
     */
    colorSuccessLightBg: string;

    /**
     * 成功色 - 优先
     *
     * @desc 不随主题变化的成功色
     */
    colorSuccessPrior: string;

    // ============   colorWarning   ============

    /**
     * 警告色 - 悬停
     *
     * @desc 警告色对应的悬停状态颜色
     */
    colorWarningHover: string;

    /**
     * 警告色 - 激活
     *
     * @desc 警告色对应的激活状态颜色
     */
    colorWarningActive: string;

    /**
     * 警告色 - 特殊
     *
     * @desc 警告色对应的特殊状态颜色
     */
    colorWarningSpecial: string;

    /**
     * 警告色 - 禁用
     *
     * @desc 警告色对应的禁用状态颜色
     */
    colorWarningDisabled: string;

    /**
     * 警告色 - 边框
     *
     * @desc 警告色对应的边框颜色
     */
    colorWarningBorder: string;

    /**
     * 警告色 - 浅色背景
     *
     * @desc 警告色的浅色背景颜色
     */
    colorWarningLightBg: string;

    /**
     * 警告色 - 优先
     *
     * @desc 不随主题变化的警告色
     */
    colorWarningPrior: string;

    // ============   colorError   ============

    /**
     * 错误色 - 悬停
     *
     * @desc 错误色对应的悬停状态颜色
     */
    colorErrorHover: string;

    /**
     * 错误色 - 激活
     *
     * @desc 错误色对应的激活状态颜色
     */
    colorErrorActive: string;

    /**
     * 错误色 - 特殊
     *
     * @desc 错误色对应的特殊状态颜色
     */
    colorErrorSpecial: string;

    /**
     * 错误色 - 禁用
     *
     * @desc 错误色对应的禁用状态颜色
     */
    colorErrorDisabled: string;

    /**
     * 错误色 - 边框
     *
     * @desc 错误色对应的边框颜色
     */
    colorErrorBorder: string;

    /**
     * 错误色 - 浅色背景
     *
     * @desc 错误色的浅色背景颜色
     */
    colorErrorLightBg: string;

    /**
     * 错误色 - 优先
     *
     * @desc 不随主题变化的错误色
     */
    colorErrorPrior: string;

    // ============   colorText   ============

    /**
     * 主要文字色
     *
     * @desc 用于正文文字色/强调色
     */
    colorTextPrimary: string;

    /**
     * 次要文字色
     *
     * @desc 比主要文字色弱一点的文字色
     */
    colorTextSecondary: string;

    /**
     * 次要信息文字色
     *
     * @desc 展示次要信息的文字色
     */
    colorTextInfo: string;

    /**
     * 描述文字色
     *
     * @desc 用于描述性文字的文字色，通常是最弱的文字色
     */
    colorTextDescription: string;

    /**
     * 占位文字色
     *
     * @desc 用于非重要信息的提示，输入框的占位文本，通常是最弱的文字色
     */
    colorTextPlaceholder: string;

    /**
     * 禁用文字色
     *
     * @desc 用于禁用状态下的文字色
     */
    colorTextDisabled: string;

    // ============   colorBorder   ============

    /**
     * 主要边框色
     *
     * @desc 用于主要边框的颜色
     */
    colorBorder: string;

    /**
     * 边框悬停色
     *
     * @desc 用于边框悬停状态的颜色
     */
    colorBorderHover: string;

    /**
     * 次要边框色
     *
     * @desc 用于次要边框的颜色
     */
    colorBorderSecondary: string;

    // ============   colorBackground   ============

    /**
     * 常规背景色
     *
     * @desc 基础的背景颜色，通常使用最多
     */
    colorBackgroundBase: string;

    /**
     * 浅色常规背景色
     *
     * @desc 基础背景颜色的浅色
     */
    colorBackgroundBaseLight: string;

    /**
     * 特殊背景色
     *
     * @desc 特殊的背景颜色，通常用于特殊/强调的场景
     */
    colorBackgroundSpecial: string;

    /**
     * 特殊浅色背景色
     *
     * @desc 特殊背景色的浅色
     */
    colorBackgroundSpecialLight: string;

    /**
     * Icon 背景色
     *
     * @desc 通常用于图标的背景色
     */
    colorBackgroundIcon: string;

    /**
     * 浅色 Icon 背景色
     *
     * @desc 通常用于浅色图标的背景色
     */
    colorBackgroundIconLight: string;
}

export interface FontMaterialToken {
    // ============   Font Size   ============

    /**
     * 辅助文字大小
     *
     * @desc 通用用于提示性辅助文本的字体大小
     */
    fontSizeSM: number;

    /**
     * 基础文字大小
     *
     * @desc 正文-常规文本字体大小
     */
    fontSizeBase: number;

    /**
     * 大号基础文字
     *
     * @desc 正文-常规文本大号字体大小
     */
    fontSizeLG: number;

    /**
     * 大号文字大小
     *
     * @desc 用于特殊场景的超大号文本的字体大小
     */
    fontSizeXL: number;

    /**
     * 大号/特殊标题文字大小
     *
     * @desc 用于特殊场景的超大号标题的字体大小
     */
    fontSizeTitleLG: number;

    /**
     * 主标题文字大小
     *
     * @desc 页面/区块标题的字体大小
     */
    fontSizeTitlePrimary: number;

    /**
     * 次要标题文字大小
     *
     * @desc 页面/区块次要标题的字体大小
     */
    fontSizeTitleSecondary: number;

    // ============   Line Height   ============

    /**
     * 辅助文字行高
     *
     * @desc 通用用于提示性辅助文本的行高
     */
    lineHeightSM: number;

    /**
     * 基础文字行高
     *
     * @desc 正文-常规文本行高
     */
    lineHeightBase: number;

    /**
     * 大号基础文字行高
     *
     * @desc 正文-常规文本大号行高
     */
    lineHeightLG: number;

    /**
     * 大号文字行高
     *
     * @desc 用于特殊场景的超大号文本的行高
     */
    lineHeightXL: number;
}


export interface SizeMaterialToken {
    // ============   Size   ============

    /**
     * 大 size
     *
     * @desc 用于大号按钮、输入框等有 size 属性的组件，对应不同的高度/宽度
     */
    sizeLG: number;

    /**
     * 中 size（默认）
     *
     * @desc 用于默认（中号）按钮、输入框等有 size 属性的组件，对应不同的高度/宽度
     */
    sizeMD: number;

    /**
     * 小 size
     *
     * @desc 用于小号按钮、输入框等有 size 属性的组件，对应不同的高度/宽度
     */
    sizeSM: number;

    /**
     * mini size
     *
     * @desc 用于 mini 按钮、输入框等有 size 属性的组件，对应不同的高度/宽度
     */
    sizeXS: number;
}


export interface RadiusMaterialToken {
    // ============   Border Radius   ============

    /**
     * 基础圆角
     *
     * @desc 使用最多的圆角大小，通常用于按钮、输入框、卡片等组件
     */
    borderRadiusBase: number;

    /**
     * 超小圆角
     *
     * @desc 超小号圆角，通常用于按钮、输入框、卡片等组件
     */
    borderRadiusXS: number;

    /**
     * 小圆角
     *
     * @desc 小号圆角，通常用于按钮、输入框、卡片等组件
     */
    borderRadiusSM: number;

    /**
     * 大圆角
     *
     * @desc 大号圆角，通常用于按钮、输入框、卡片等组件
     */
    borderRadiusLG: number;

    /**
     * 超大圆角
     *
     * @desc 超大号圆角，通常用于按钮、输入框、卡片等组件
     */
    borderRadiusXL: number;

    /**
     * 无圆角
     *
     * @desc 即圆角大小为 0
     */
    borderRadiusNone: number;
}

export interface ShadowMaterialToken {
    // ============   Shadow   ============

    /**
     * 阴影1
     *
     * @desc 1号阴影，适用于下拉菜单等场景
     */
    shadow1: string;

    /**
     * 阴影1 - 模糊
     *
     * @desc 1号模糊阴影，适用于弹窗对话框等场景
     */
    shadow1Blur: string;

    /**
     * 阴影1 - 下模糊
     *
     * @desc 1号下模糊阴影，适用于气泡卡片等场景
     */
    shadow1BlurDown: string;

    /**
     * 阴影2 - 左
     *
     * @desc 2号左阴影，适用于固定表格右侧浮层等场景
     */
    shadow2Left: string;

    /**
     * 阴影2 - 右
     *
     * @desc 2号右阴影，适用于固定表格左侧浮层等场景
     */
    shadow2Right: string;

    /**
     * 阴影2 - 模糊
     *
     * @desc 2号模糊阴影，适用于白底卡片等场景
     */
    shadow2Blur: string;

    /**
     * 阴影2 - 模糊 - 左
     *
     * @desc 2号左模糊阴影，适用于右侧抽屉等场景
     */
    shadow2BlurLeft: string;

    /**
     * 阴影3
     *
     * @desc 3号阴影，适用于顶部菜单栏及工具栏等场景
     */
    shadow3: string;
}

export interface MaterialToken
    extends ColorMaterialToken,
    FontMaterialToken,
    SizeMaterialToken,
    RadiusMaterialToken,
    ShadowMaterialToken {}
