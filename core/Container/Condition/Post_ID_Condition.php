<?php

namespace Carbon_Fields\Container\Condition;

use Carbon_Fields\App;

class Post_ID_Condition extends Condition {

	/**
	 * Constructor
	 */
	public function __construct() {
		$this->set_comparers( array(
			App::resolve( 'container_condition_comparer_type_equality' ),
			App::resolve( 'container_condition_comparer_type_contain' ),
			App::resolve( 'container_condition_comparer_type_scalar' ),
			App::resolve( 'container_condition_comparer_type_regex' ),
			App::resolve( 'container_condition_comparer_type_custom' ),
		) );
	}
	
	/**
	 * Check if the condition is fulfilled
	 * 
	 * @param  array $environment
	 * @return bool
	 */
	public function is_fulfilled( $environment ) {
		$post = $environment['post'];
		$post_id = is_object( $post ) ? intval( $post->ID ) : 0;

		return $this->first_supported_comparer_is_correct(
			$post_id,
			$this->get_comparison_operator(),
			$this->get_value()
		);
	}
}