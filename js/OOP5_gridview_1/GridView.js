class GridView {
    /**
     * ptoperties
     * @param [array] _tableClass  //css классы оформления
     * @param [array] data //входные данные
     * @param [array] _atribute  // управляем что выводим и как из входных данных data 
     * @param [array] _element  //куда выводить таблицу
     * @param [array] _header  //заголовок таблицы
     * @param [array] _headerClass  //css классы заголовка таблицы
     */
    constructor() {
        this._header = '';
        this._headerClass = [];
        this._tableClass = [];
        this._element = 'body';
        this._attribute = [];
    }

    /**
     * Method set header
     */
    set header(header) {
        if (typeof header === 'string' && header.trim() != '') {
            this._header = header.trim();
            return true;
        }
        return false;
    }

    /**
     * Method set headerClass
     */
    set headerClass(headerClass) {
            if (typeof headerClass === 'Object') {
                this._headerClass = headerClass;
                return true;
            }
            return false;
        }
        /**
         * Method set element
         */
    set element(element) {
            if (document.querySelector(elemen)) {
                this._element = document.querySelector(element);
                return true;
            }
            return false;
        }
        /**
         * Method for show GridViewTable
         */
    render() {

    }




}