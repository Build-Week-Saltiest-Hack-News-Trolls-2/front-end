import React from 'react'
import styled from 'styled-components'
import { Button } from 'reactstrap'

const CommentList = () => {

const Comment = styled.div`
margin-bottom: 20px;
display: flex;
flex-direction: row;
justify-content:space-between;
`


    return (
        <div>
            <Comment>
                <div className='comment-username'>
                <h3>USER</h3>
                <Button color="danger">Delete</Button></div>
                <div className='comment-text'>This reminds me of how I hacked twitter 10+ years ago to get free SMS delivery for a web app I built. Before Twilio, custom SMS notification delivery was hard and expensive.
At the time, twitter allowed you to receive SMS notifications of tweets posted to a followed account. I created a private account and used twitter's API to post tweets to with the notification content I wanted to send. I then had "dummy" accounts follow the "notification" account. These dummy accounts had recipient phone numbers with SMS notifications turned on.

The flow was: Web App -> Twitter API -> Tweet from "notification" account -> followers received SMS notifications. Free SMS delivery!

It was clunky and SMS notifications looked like they came from twitter (they did) but it solved my use case perfectly.
                </div>
            </Comment>
            <Comment>
                <div className='comment-username'>
                <h3>USER</h3>
                <Button color="primary" block>Save</Button>
                </div>
                <div className='comment-text'>Lol I may or may not currently be using a Twitter account and cron to broadcast any changes to my (non-static) home ip address, encrypted, so I can ssh into my workstation when I'm on vacation.
reply
                </div>      
            </Comment>
            <Comment><div className='comment-username'>
            <h3>USER</h3>
            <Button color="primary">Save Comment</Button></div>
            <div className='comment-text'>
            He writes: "Of course if that’s a major problem, then offering 2FA logins and password verification via cell phone wouldn’t make much sense either."
But this is not necessarily true, as spoofing a source phone number of an SMS is a lot easier than receiving an SMS that was sent to another number.
</div> </Comment>
            <Comment>
            <div className='comment-username'>
            <h3>USER</h3>
            <Button color="danger" block>Remove Comment</Button></div>
            <div className='comment-text'>
            Only if 2FA doesn't open up customer support channels that defeat the point of 2FA, like the common "oops I lost my phone lol" channel attack that gives you access to an account if you can provide the other factor.
(Still) works against Amazon btw: https://medium.com/@espringe/amazon-s-customer-service-backd...

I'd say 2FA is often worse than 1FA because customer support systems are rarely prepared to say "sorry, can't give you access to your account :/". Because 99.9% of the time, it really is a user accidentally locked out of their account.
            </div> 
        </Comment>
        <Comment>
            <div className='comment-username'>
            <h3>USER</h3>
            <Button color="primary" block>Save Comment</Button></div>
            <div className='comment-text'>
            > In all such cases the cost of engineering/operations time to keep these services alive overshadows pretty much everything else
This is an extremely aggressive claim that I doubt holds up.

I would absolutely agree with "In _many_ such cases", or "In _most_ such cases", but it's almost certainly false to claim "In _all_ such cases".
            </div>
        </Comment>
        
        </div>
    )
}
export default CommentList
