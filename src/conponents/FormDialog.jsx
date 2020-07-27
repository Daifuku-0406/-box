import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';


export default class FormDialogSubmit extends React.Component{
constructor(props) {
        super(props)
        this.state={
            question:"",
            open:false,
            setOpen:false
        }

    }
  
    handleClickOpen = () => {
        this.setState({
            open: true
        })
    };
  
    handleClose = () => {
        this.setState({
            open:false
        })
    };


    textInput = (event) => {
        this.setState({
            question:event.target.value
        })
    }
     
    submit = () => {
        const question = this.state.question
        const url = 'https://hooks.slack.com/services/××××××××××××××××××××××××'
        const payload =　{ 
            text: "質問がきました" + '\n' + question
        }

        fetch(url,{
            method: 'POST',
            body: JSON.stringify(payload)
        }).then(() => {
            alert('送信しました！')
            this.setState({
                question:""
            })
            return this.handleClose()
        })
  };

    render(){
        return (
            <div>
            <Button variant="outlined" color="primary" onClick={this.handleClickOpen}>
                質問どうぞ！
            </Button>
            <Dialog open={this.state.open} onClose={this.handleClose} aria-labelledby="form-dialog-title">
                <DialogTitle id="form-dialog-title">質問どうぞ！</DialogTitle>
                <DialogContent>
                <DialogContentText>
                個人情報とかでないなら、大体答えますよー　※ツイートで返信します。
                </DialogContentText>
                <TextField
                    autoFocus
                    margin="dense"
                    id="name"
                    label="質問はここへ入力"
                    type="text"
                    fullWidth
                    onChange={this.textInput} />
                </DialogContent>
                <DialogActions>
                <Button onClick={this.handleClose} color="primary">
                    キャンセル
                </Button>
                <Button onClick={this.handleClose} color="primary" onClick={this.submit}>
                    送信！
                </Button>
                </DialogActions>
            </Dialog>
            </div>
    );
    }
}
