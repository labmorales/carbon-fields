/**
 * External dependencies.
 */
import { addFilter } from '@wordpress/hooks';
import { __ } from '@wordpress/i18n';

/**
 * The internal dependencies.
 */
import FieldBase from '../../components/field-base';
import withField from '../../components/with-field';

addFilter( 'carbon-fields.time-field.metabox', 'carbon-fields/metaboxes', ( OriginalDatetimeField ) => withField( ( props ) => {
	return (
		<FieldBase field={ props.field } >
			<OriginalDatetimeField
				fieldKey={ props.field.id }
				buttonText={ __( 'Select Time' ) }
				{ ...props }
			/>
		</FieldBase>
	);
} ) );
