(function($){
		
	acf.fields.repeater = acf.field.extend({
		
		type: 'repeater',
		$el: null,
		$input: null,
		$table: null,
		$tbody: null,
		$clone: null,
		
		actions: {
			'ready':	'initialize',
			'append':	'initialize',
			'show':		'show'
		},
		
		events: {
			'click a[data-event="add-row"]': 		'_add',
			'click a[data-event="remove-row"]': 	'_remove',
			'click a[data-event="collapse-row"]': 	'_collapse',
			'mouseenter td.order': 					'_mouseenter'
		},
		
		focus: function(){
			
			// vars
			this.$el = this.$field.find('.acf-repeater:first');
			this.$input = this.$field.find('input:first');
			this.$table = this.$field.find('table:first');
			this.$tbody = this.$table.children('tbody');
			this.$clone = this.$tbody.children('tr.acf-clone');
			
			
			// get options
			this.o = acf.get_data(this.$el, {
				'min':	0,
				'max':	0
			});
			
			
			// min / max
			this.o.min = parseInt(this.o.min);
			this.o.max = parseInt(this.o.max);
			
		},
		
		initialize: function(){
			
			// disable clone
			acf.disable_form( this.$clone, 'repeater' );
						
			
			// render
			this.render();
			
		},
		
		show: function(){
			
			this.$tbody.find('.acf-field:visible').each(function(){
				
				acf.do_action('show_field', $(this));
				
			});
			
		},
		
		count: function(){
			
			return this.$tbody.children().length - 1;
			
		},
		
		render: function(){
			
			// update order numbers
			this.$tbody.children().each(function(i){
				
				$(this).find('> td.order > span').html( i+1 );
				
			});
			
			
			// empty?
			if( this.count() == 0 ) {
			
				this.$el.addClass('-empty');
				
			} else {
			
				this.$el.removeClass('-empty');
				
			}
			
			
			// row limit reached
			if( this.o.max > 0 && this.count() >= this.o.max ) {
				
				this.$el.find('> .acf-actions .button').addClass('disabled');
				
			} else {
				
				this.$el.find('> .acf-actions .button').removeClass('disabled');
				
			}
			
		},
		
		add: function( $tr ){
			
			// defaults
			$tr = $tr || this.$clone;
			
			
			// validate
			if( this.o.max > 0 && this.count() >= this.o.max ) {
			
				alert( acf._e('repeater','max').replace('{max}', this.o.max) );
				return false;
				
			}
			
			
			// reference
			var $field = this.$field;
				
				
			// duplicate
			$el = acf.duplicate( this.$clone );
			
						
			// remove clone class
			$el.removeClass('acf-clone');
			
			
			// enable 
			acf.enable_form( $el, 'repeater' );
			
			
			// move row
			$tr.before( $el );
			
			
			// focus (may have added sub repeater)
			this.doFocus($field);
			
			
			// update order
			this.render();
			
			
			// validation
			acf.validation.remove_error( this.$field );
			
			
			// sync collapsed order
			this.sync();
			
			
			// return
			return $el;
			
		},
		
		remove: function( $tr ){
			
			// reference
			var self = this;
				
			
			// validate
			if( this.count() <= this.o.min ) {
			
				alert( acf._e('repeater','min').replace('{min}', this.o.min) );
				return false;
			}
			
			
			// action for 3rd party customization
			acf.do_action('remove', $tr);
			
			
			// animate out tr
			acf.remove_tr( $tr, function(){
				
				// trigger change to allow attachment save
				self.$input.trigger('change');
			
			
				// render
				self.render();
				
				
				// sync collapsed order
				self.sync();
				
				
				// refersh field (hide/show columns)
				acf.do_action('refresh', self.$field);
				
			});
			
		},
		
		sync: function(){
			
			// vars
			var name = 'collapsed_' + this.$field.data('key'),
				collapsed = [];
			
			
			// populate collapsed value
			this.$tbody.children().each(function( i ){
				
				if( $(this).hasClass('-collapsed') ) {
				
					collapsed.push( i );
					
				}
				
			});
			
			
			// update
			acf.update_user_setting( name, collapsed.join(',') );	
			
		},
		
		
		/*
		*  events
		*
		*  these functions are fired for this fields events
		*
		*  @type	function
		*  @date	17/09/2015
		*  @since	5.2.3
		*
		*  @param	e
		*  @return	n/a
		*/
		
		_mouseenter: function( e ){ //console.log('_mouseenter');
			
			// bail early if already sortable
			if( this.$tbody.hasClass('ui-sortable') ) return;
			
			
			// bail early if max 1 row
			if( this.o.max == 1 ) return;
			
			
			// reference
			var self = this;
			
			
			// add sortable
			this.$tbody.sortable({
				items: '> tr',
				handle: '> td.order',
				forceHelperSize: true,
				forcePlaceholderSize: true,
				scroll: true,
				start: function(event, ui) {
					
					acf.do_action('sortstart', ui.item, ui.placeholder);
					
	   			},
	   			stop: function(event, ui) {
					
					// render
					self.render();
					
					acf.do_action('sortstop', ui.item, ui.placeholder);
					
	   			},
	   			update: function(event, ui) {
		   			
		   			// trigger change
					self.$input.trigger('change');
					
		   		}
	   			
			});
			
		},
		
		_add: function( e ){ //console.log('_add');
			
			// vars
			$row = false;
			
			
			// row add
			if( e.$el.hasClass('acf-icon') ) {
			
				$row = e.$el.closest('.acf-row');
				
			}
			
			
			// add
			this.add( $row );
				
		},
		
		_remove: function( e ){ //console.log('_remove');
			
			// reference
			var self = this;
			
			
			// vars
			var $row = e.$el.closest('.acf-row');
			
			
			// add -open class to show controlls
			$row.addClass('-hover');
			
			
			// confirm
			acf.tooltip.confirm_remove( e.$el, function( result ){
				
				$row.removeClass('-hover');
				
				if( result ) {
					
					self.remove( $row );
					
				}
				
			});
			
		},
		
		_collapse: function( e ){ //console.log('_collapse');
			
			// vars
			var $tr = e.$el.closest('.acf-row');
			
			
			// reference
			var $field = this.$field;
			
			
			// open row
			if( $tr.hasClass('-collapsed') ) {
				
				$tr.removeClass('-collapsed');
				
				acf.do_action('show', $tr, 'collapse');
				
			} else {
				
				$tr.addClass('-collapsed');
				
				acf.do_action('hide', $tr, 'collapse');
				
			}
			
			
			// sync
			this.set('$field', $field).sync();
			
			
			// refersh field (hide/show columns)
			acf.do_action('refresh', this.$field);
						
		}
		
	});	
	
})(jQuery);