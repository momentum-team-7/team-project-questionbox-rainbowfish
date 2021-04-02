const questions = [
    {title: 'title 1', question: 'Question 1?', id: 1},
    {title: 'title 1', question: 'Question 2?', id: 2},
    {title: 'title 1', question: 'Question 3?', id: 3},

]

let lastQuestionId = 3

export function getAuthToken (userName, password){
    return new Promise((resolve, reject) => {
        resolve({
            token: 'texttoken'
        })
    })
}

export function getQuestions (authToken) {
    return new Promise((resolve, reject) => {
        resolve({ questions: questions})
    })
}
 export function storeQuestion (authToken, note) {
     lastQuestionId += 1
     question.id = lastQuestionId
     questions.push(question)
     return new Promise((resolve, reject) => {
         resolve(question)
     })
 }