

/**
 * 整体描述
 * @class
 * @name Example
 */
var Example = Ext.extend(Ext.util.Observable, {

    /**
     * @property 属性描述
     */
    writer : undefined,

    /**
     * @example
     * <caption>JSDoc3 Captions</caption>
     * new Ext.Button({
     *      text: 'test',
     *      handler: () => {
     *          alert('123');
     *      }
     * });
     *
     */
    testExample: function () {
    },

    /**
     * 方法描述
     * @param config 参数
     * @return 返回结果
     */
    buildWriter : function(config) {
        var klass = undefined,
            type = (config.format || 'json').toLowerCase();
        switch (type) {
            case 'json':
                klass = Ext.data.JsonWriter;
                break;
            case 'xml':
                klass = Ext.data.XmlWriter;
                break;
            default:
                klass = Ext.data.JsonWriter;
        }
        return new klass(config);
    },
});
