import React from 'react'

import OurSkills from './OurSkills/OurSkills'
import OurClients from './OurClients/OurClients'

import style from './style.module.scss'

const ClientsSection = () => {
	return (<div className={style.wrapper}>
		<OurSkills />
		<OurClients/>
	</div> );
}
 
export default ClientsSection;
