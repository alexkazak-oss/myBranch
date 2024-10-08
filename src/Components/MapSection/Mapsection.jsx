import 'leaflet/dist/leaflet.css'
import React, {useEffect, useRef, useState} from 'react'
import {MapContainer, TileLayer, useMapEvents} from 'react-leaflet'
import {useLeafletContext} from '@react-leaflet/core'
import L from 'leaflet'
import style from './style.module.scss'

// Функция для получения границ прямоугольника на основе центра и размера
function getBounds(props) {
	return L.latLng(props.center).toBounds(props.size)
}

// Компонент Square, который добавляет прямоугольник на карту
function Square(props) {
	const context = useLeafletContext() //  контекст карты
	const squareRef = useRef() //  ссылка на прямоугольник
	const propsRef = useRef(props) //  пропсы в ref

	//  useEffect для создания и удаления прямоугольника
	useEffect(() => {
		squareRef.current = new L.Rectangle(getBounds(props)) // прямоугольник
		const container = context.layerContainer || context.map // контейнер слоев карты
		container.addLayer(squareRef.current) // прямоугольник на карту

		return () => {
			container.removeLayer(squareRef.current) // прямоугольник при размонтировании компонента
		}
	}, [])

	//  useEffect для обновления прямоугольника при изменении пропсов center и size
	useEffect(() => {
		if (
			props.center !== propsRef.current.center ||
			props.size !== propsRef.current.size
		) {
			squareRef.current.setBounds(getBounds(props)) //  границы прямоугольника
		}
		propsRef.current = props //  текущие пропсы
	}, [props.center, props.size])

	return null //  null, так как прямоугольник добавляется непосредственно на карту
}

function CenterTracker({setCenter}) {
	useMapEvents({
		moveend(e) {
			setCenter(e.target.getCenter())
		},
	})
	return null
}

const center = [45.4741, 9.175] // Центр карты

const MapSection = () => {
	const [mapCenter, setMapCenter] = useState({lat: center[0], lng: center[1]}) // Состояние для хранения центра карты

	return (
		<div className={style.wrapper}>
			<div className={style.container}>
				<h3
					className={style.title}>{`Position: ${mapCenter.lat.toFixed(
					4,
				)}, ${mapCenter.lng.toFixed(4)}`}</h3>
				<div className={style.content}>
					<MapContainer center={center} zoom={15} className={style.map}>
						<TileLayer
							attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
							url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
						/>
						<Square center={center} size={100} />{' '}
						{/* Добавляем прямоугольник */}
						<CenterTracker setCenter={setMapCenter} />{' '}
						{/* Отслеживаем изменения центра карты */}
					</MapContainer>
				</div>
			</div>
		</div>
	)
}

export default MapSection
