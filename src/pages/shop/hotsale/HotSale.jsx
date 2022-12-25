import React from 'react'

import CardShop from '../../../components/cardshop/CardShop'
import HeaderSale from '../../../components/headersale/HeaderSale'
import data from '../../../assets/data'

import { useDispatch } from "react-redux"
import { addItemModal } from "../../../redux/action/action"
import './HotSale.scss'
const HotSale = () => {
    const disPath = useDispatch()
    const activeModal = (item) => {
        disPath(addItemModal(item))
    }
    return (
        <>
            <div className='hotsale'>
                <HeaderSale name="indie_hero" img="https://media.greenmangaming.com/promo/Indie-2022/banners-Indie-Heroes.jpg" />
                <div className='card-hotsalt'>
                    {data.indie_hero.map((item, i) => {
                        return (
                            <div key={item.id} onMouseUp={() => {
                                    activeModal(item)
                            }}>
                                <CardShop item={item} />
                            </div>
                        )
                    })}
                </div>
            </div>
            <div className='hotsale'>
                <HeaderSale name="coming_soon" img="https://media.greenmangaming.com/flat-page/headers/new/new-releases/bg-banner-asset-arrow-opt.jpg" />
                <div className='card-hotsalt'>
                    {data.coming_soon.map((item, i) => (
                        <div key={item.id} onMouseUp={() => {
                                activeModal(item)
                        }}>
                            <CardShop item={item} />
                        </div>
                    ))}
                </div>
            </div>
            <div className='hotsale'>
                <HeaderSale name="featured_deal" img="https://media.greenmangaming.com/flat-page/headers/new/hot-deals/bg-banner-asset-heat-opt.jpg" />
                <div className='card-hotsalt'>
                    {data.featured_deal.map((item, i) => (
                        <div key={item.id} onMouseUp={() => {
                                activeModal(item)
                        }}>
                            <CardShop item={item} />
                        </div>
                    ))}
                </div>
            </div>
            <div className='hotsale'>
                <HeaderSale name="on_sale" img="https://media.greenmangaming.com/flat-page/headers/new/hot-deals/bg-banner-asset-heat-opt.jpg" />
                <div className='card-hotsalt'>
                    {data.on_sale.map((item, i) => (
                        <div key={item.id} onMouseUp={() => {
                                activeModal(item)
                        }}>
                            <CardShop item={item} />
                        </div>
                    ))}
                </div>
            </div>
        </>
    )
}

export default HotSale