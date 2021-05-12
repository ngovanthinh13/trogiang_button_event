class SearchBox extends HTMLElement{
    constructor(){
        super();
        this.attachShadow({mode:'open'})
        this._searchText ='';
        this.render();

        this.shadowRoot.querySelector('input').addEventListener('keydown', (e) => {
            this._searchText = e.target.value;
            theTextSearch(this._searchText);
        });        
    }
    get searchText() {
        return this._searchText;
    }

    theTextSearch(text){
        const event = new CustomEvent('change', {
            bubbles : true,
            detail: {text}
        })
        this.dispatchEvent(event)
    }

    render(){
        this.shadowRoot.innerHTML= `
            <input type='text' placeholder='Search...' />
            <i class='search icon'></i>
        `
    }
}

customElements.define('search-box', SearchBox)