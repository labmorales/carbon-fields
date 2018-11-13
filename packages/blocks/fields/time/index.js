/**
 * External dependencies.
 */
import { Fragment } from '@wordpress/element';
import { addFilter } from '@wordpress/hooks';
import { __ } from '@wordpress/i18n';

addFilter( 'carbon-fields.time-field.block', 'carbon-fields/blocks', ( OriginalDatetimeField ) => ( props ) => {
	return (
		<Fragment>
			<OriginalDatetimeField
				fieldKey={ props.name }
				buttonText={ __( 'Select Time' ) }
				{ ...props }
			/>
		</Fragment>
	);
} );
