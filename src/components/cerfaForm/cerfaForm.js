import React from 'react'
import {compose} from 'recompose'
import CefraLogo from '../../assets/img/logo.png'
import { Checkbox, Input } from 'semantic-ui-react'
import './styles.scss'

const CerfaForm = () => (
	<div className='CerfaForm'>
		<div className="CerfaForm_header">
			<div className="CerfaForm_header__row CerfaRow">
				<div className='CerfaRow_logo'>
					<img src={CefraLogo} alt="CerfaRow_logo__img" className='CerfaRow_logo__img'/>
					<p className='CerfaRow_logo__title'>Small logo title</p>
				</div>
				<h2 className="CerfaRow_title">
					Title for block 'CerfaRow_title' with some text Lorem ipsum dolor sit.
				</h2>
				<div className="CerfaRow_certificate">
					<p className="CerfaRow_certificate__text">Cefra</p>
					<p className='CerfaRow_certificate__number'>№ 10078*02</p>
				</div>
			</div>
			<div className="CerfaForm_header__row CerfaRow CerfaRow_col2">
				<div className="CerfaRow_left">
					Declaration some text Declaration
					ben (1)
				</div>
				<div className="CerfaRow_right">
					<Checkbox />
					<p>
						Lorem ipsum dolor sit amet, consectetur
						adipisicing elit. Asperiores corporis culpa cum ducimus exercitationem
						incidunt ipsam, neque numquam temporibus vel.
						adipisicing elit. Asperiores corporis culpa cum ducimus exercitationem
					</p>
					<Checkbox />
				</div>
			</div>
			<div className="CerfaForm_header__row CerfaRow CerfaRow_col2">
				<div className="CerfaRow_left">
					Declaration some text Declaration
					ben (2)
				</div>
				<div className="CerfaRow_right">
					<Checkbox />
					<p>
						Lorem ipsum dolor sit amet, consectetur
						adipisicing elit. Asperiores corporis culpa cum ducimus exercitationem
						incidunt ipsam, neque numquam temporibus vel.
						adipisicing elit. Asperiores corporis culpa cum ducimus exercitationem
					</p>
					<Checkbox />
				</div>
			</div>
		</div>
		<div className="CerfaForm_body">
			<div className="CerfaForm_body__top CerfaFormBodyTop">
				<h4 className="CerfaFormBodyTop_title">
					Cadre reverse to administrator
				</h4>
				<div className="CerfaFormBodyTop_fields">
					<Input label={<label>Date declaration</label>} />
					<Input label={<label>Number of declaration</label>} />
					<Input label={<label>Prix money out m <sup>2</sup> </label>} />
				</div>
			</div>
			<div className="CerfaForm_body__form CerfaFormBodyForm">
				<div className="CerfaFormBodyForm_title">A. Propiatarie</div>
				<div className="CerfaFormBodyForm_fields">
					<Input className='black' label={<label>Persone fisique</label>}/>
					<Input label={<label>None prenome</label>}/>
					<Input label={<label>Proffesion (facultatif) (5)</label>}/>
					<Input className='black' label={<label>Persone fisique</label>}/>
					<Input label={<label>None prenome</label>}/>
					<Input className='black' label={<label>Persone fisique</label>}/>
					<Input label={<label>None prenome</label>}/>
					<Input label={<label>None prenome</label>}/>
				</div>
				<div className="CerfaFormBodyForm_title">B. Propiatarie</div>
				<div className="CerfaFormBodyForm_fields">
					<Input className='black' label={<label>Persone fisique</label>}/>
					<Input label={<label>None prenome</label>}/>
					<Input label={<label>Proffesion (facultatif) (5)</label>}/>
					<Input className='black' label={<label>Persone fisique</label>}/>
					<Input label={<label>None prenome</label>}/>
					<Input className='black' label={<label>Persone fisique</label>}/>
					<Input label={<label>None prenome</label>}/>
					<Input label={<label>None prenome</label>}/>
				</div>
				<div className="CerfaFormBodyForm_title">C. Propiatarie</div>
				<div className="CerfaFormBodyForm_fields">
					<div className='CerfaFormBodyForm_fields__cols3'>
						<Input label={<label>None prenome</label>}/>
						<Input label={<label>None prenome</label>}/>
						<Input label={<label>None prenome</label>}/>
					</div>
					<Input label={<label>None prenome</label>}/>
					<Input label={<label>None prenome</label>}/>
				</div>
			</div>
		</div>
		<div className="CerfaForm_footer">
			CerfaForm_footer
		</div>
	</div>
);

const enhance = compose();

export default enhance(CerfaForm);
