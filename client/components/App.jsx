'use strict';
import {observer} from 'mobx-react'; // <-- That's store based magic, for now just think about it as making the following component watch when our state store changes
import AppStore from '../stores/AppStore';
import AppBody from './AppBody';
import NeoStore from '../stores/NeoStore';
import NeoSelect from '../stores/NeoStore';
import NeoBody from './NeoBody';

module.exports = observer(() => {
    return (
        <main>
            <header>
                <h1>{AppStore.exampleTitle}</h1>
            </header>
            <AppBody Store={AppStore} />
            <NeoBody Store={NeoStore} />
        </main>
    )
});
