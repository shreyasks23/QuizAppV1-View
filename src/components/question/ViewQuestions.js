import Question from './Question'

export default function ViewQuestions(props) {
   
    const Questions = [{
        questionId: 1,
        questionText: 'Ut Lorem sit eiusmod nulla irure genenrted 1.',
        options: ["worong11", 'wrong12', 'right11', 'worng13']
    }, {
        questionId: 2,
        questionText: 'Ut Lorem sit eiusmod nulla irure geneaatione 2 .',
        options: ["worong21", 'wrong22', 'right21', 'worng23']
    }, {
        questionId: 3,
        questionText: 'Ut Lorem sit eiusmod nulla irure subnject 3.',
        options: ["worong31", 'wrong32', 'right31', 'worng33']
    }, {
        questionId: 4,
        questionText: 'Ut Lorem sit eiusmod nulla irure sfkakfef 4.',
        options: ["worong41", 'wrong42', 'right41', 'worng43']
    }];   

    return (
        <div>
            {
                Questions.map((q,i) => {
                    return (
                        <Question key = {i} item={q}/>
                    )
                })
            }
        </div>
    )

}