import React from 'react'
import { Route, Switch } from 'react-router-dom'

import Discord from '../pages/discord/Discord'
import Download from '../pages/download/Download'
import Nitro from '../pages/nitro/Nitro'
import Safe from '../pages/safe/Safe'
import Support from '../pages/support/Support'
import Shop from '../pages/shop/Shop'
import Bag from '../pages/bag/Bag'
import CardBag from '../pages/cardBag/CardBag'
import OderSuccess from '../pages/order_Success/OderSuccess'

const Routes = () => {
    return (
        <Switch>
            <Route
                path='/discord_clone/download'
                component={Download}
            />
            <Route
                path='/discord_clone/nitro'
                component={Nitro}
            />
            <Route
                path='/discord_clone/safe'
                component={Safe}
            />
            <Route
                path='/discord_clone/support'
                component={Support}
            />
            <Route
                path='/discord_clone/shop'
                component={Shop}
            />
             <Route
                path='/discord_clone/cardBag'
                component={CardBag}
            />
             <Route
                path='/discord_clone/bag'
                component={Bag}
            />
            <Route
                path='/discord_clone/success'
                component={OderSuccess}
            />
            <Route
                path='/discord_clone'
                extact
                component={Discord}
            />
        </Switch>
    )
}

export default Routes