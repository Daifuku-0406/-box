import React from 'react';
import Title from './conponents/aaa';
import TextInput from './conponents/TextInput'
import FormDialogSubmit from './conponents/FormDialogSubmit'

export default class App extends React.Component{
    constructor(props){
        super();
       this.TextInput = TextInput.bind
    }

    render(){
    return <>
    <Title title= "大福問い合わせフォーム" />
    <FormDialogSubmit  />
    </>
    }
}

