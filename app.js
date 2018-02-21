Vue.component('custom-navbar', {
	template: `
<nav class="navbar navbar-expand-lg sticky-top navbar-light bg-light">

  <a class="navbar-brand" href="#">cjthomp.github.io</a>
  
  <button class="navbar-toggler" type="button" 
          data-toggle="collapse" data-target="#navbarSupportedContent" 
          aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"
  >
    <span class="navbar-toggler-icon"></span>
  </button>

  <div class="collapse navbar-collapse">
    
    <ul class="nav navbar-nav nav-tabs mr-auto">
      <li class="nav-item active">
        <a class="nav-link" ref="link-home" href="#home" @click="select('home')">Home</a>
      </li>
      
      <li class="nav-item">
        <a class="nav-link" ref="link-portfolio" href="#portfolio" @click="select('portfolio')">Portfolio</a>
      </li>
      
      <li class="nav-item">
        <a class="nav-link" ref="link-blog" href="#blog" @click="select('blog')">Blog</a>
      </li>
      
      <li class="nav-item">
        <a class="nav-link" ref="link-contact" href="#contact" @click="select('contact')">Contact</a>
      </li>
    </ul>

    <div>
      WIP
    </div>
  </div>
</nav>
`,
	props: [],
	data: function() {
		return {
			selected: 'home',
		};
	},
	methods: {
		select: function(label) {
			this.$emit('tab-changed', label);
		},
	},
});

Vue.component('custom-blog', {
	template: `
<div>
	blog
</div>
`,
	props: [],
	data: function() {
		return {}
	},
	methods: {},
})

const appContent = new Vue({
  el: '#app',
  data: function() {
  	return {
  		selected: 'home',
  	}
  },
  methods: {
  	selectTab: function(label) {
  		console.log(label);
  		this.selected = label;
  	},
  }
});
