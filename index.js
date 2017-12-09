import * as maptalks from 'maptalks';

const options = {
    'position': { 'bottom' : 0, 'right' : 0 },
    'precision'  : 5
}

export class MouseCoordinate extends maptalks.control.Control {
    buildOn(map) {
        var dom = document.createElement('div')

        dom.style.padding = "0 5px"
        dom.style.backgroundColor = 'rgba(255,255,255,0.7)'
        dom.style.fontSize = '13px'

        return dom;
    }
    onAdd() {
        this._map.on('mousemove', this.onMouseMove, this)
    }
    onMouseMove(event){
        const {x, y} = event.coordinate,
            precision = this.options.precision

        this._controlDom.innerText = x.toFixed(precision) + " : " + y.toFixed(precision)
    }
    onRemove() {
        this._map.off('mouseover', this.onMouseOver)
    }
}

MouseCoordinate.mergeOptions(options);