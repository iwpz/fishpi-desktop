import Page from './page'

class RedPacket extends Page
{
    constructor(app, name) {
        super(app, name);
        
    }

    create(options = {}, args) {
        options = Object.assign({
            url: `redpacket/${typeof args == 'string' ? args : `${args.id}/${args.gesture || args.user}`}`,
            show: true,
            frame: false,
            width: 250, 
            height: 400, 
            minWidth: 250,
            minHeight: 400,
            alwaysOnTop :true,
            resize: true,            
            skipTaskbar: true,
        }, options);
        let ret = super.create(options);
        return ret;
    }

    get events() {
        return {
            hide() {
                if(!this.win) return;
                this.win.hide()
            },
            show() {
                if(!this.win) return;
                this.win.setAlwaysOnTop(true, 'floating')
                this.win.showInactive()
            },
        }
    }
}

export default RedPacket;