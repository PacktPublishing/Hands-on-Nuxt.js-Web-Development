(function($){        
	
	/*
	*  Repeater
	*
	*  This field type requires some extra logic for its settings
	*
	*  @type	function
	*  @date	24/10/13
	*  @since	5.0.0
	*
	*  @param	n/a
	*  @return	n/a
	*/
	
	var acf_settings_repeater = acf.field_group.field_object.extend({
		
		type: 'repeater',
		
		actions: {
			'render_settings': 'render'
		},
		
		events: {
			'change .acf-field-setting-layout input':		'_change_layout',
			'focus .acf-field-setting-collapsed select':	'_focus_collapsed'
		},
		
		focus: function(){
			
			this.$fields = this.$field.find('.acf-field-list:first');
			
		},
		
		render: function(){
			
			this.render_layout();
			this.render_collapsed();
			
		},
		
		render_layout: function(){
			
			// vars
			var layout = this.setting('layout input:checked').val();
			
			
			// update data
			this.$fields.attr('data-layout', layout);
			
		},
		
		render_collapsed: function(){
			
			// vars
			var $select = this.setting('collapsed select');
			
			
			// collapsed
			var choices = [];
			
			
			// keep 'null' choice
			choices.push({
				'label': $select.find('option[value=""]').text(),
				'value': ''
			});
			
			
			// loop
			this.$fields.children('.acf-field-object').each(function(){
				
				// vars
				var $field = $(this);
				
				
				// append
				choices.push({
					'label': $field.find('.field-label:first').val(),
					'value': $field.attr('data-key')
				});
				
			});
			
			
			// render
			acf.render_select( $select, choices );
			
		},
		
		_change_layout: function( e ){
			
			this.render_layout();
			
		},
		
		_focus_collapsed: function( e ){
			
			this.render_collapsed();
			
		}
		
	});

})(jQuery);