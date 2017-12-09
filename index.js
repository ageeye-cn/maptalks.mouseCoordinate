import * as maptalks from 'maptalks';

const options = {
    position: {bottom: 0, right: 0},
    precision: 5,
    style: {
        padding: '0 5px',
        backgroundColor: 'rgba(255,255,255,0.7)',
        fontSize: '13px'
    }
}

export class MouseCoordinate extends maptalks.control.Control {
    buildOn(map) {
        const dom = document.createElement('div')

        Object.assign(dom.style, this.options.style)

        return dom;
    }

    onAdd() {
        this._map.on('mousemove', this.onMouseMove, this)
    }

    onMouseMove(event) {
        const {x, y} = event.coordinate,
            precision = this.options.precision

        this._controlDom.innerText = x.toFixed(precision) + " : " + y.toFixed(precision)
    }

    onRemove() {
        this._map.off('mouseover', this.onMouseOver)
    }
}

MouseCoordinate.mergeOptions(options);