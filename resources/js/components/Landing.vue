<template>
    <div class="content-header">
        <div class="container">
            <div class="row mb-2 justify-content-md-center">
                <div class="col-sm-6">
                    <h1 class="m-0">Quesioner <strong>Survey Kepuasan Pelayanan</strong></h1>
                </div>
                <div class="col-sm-6">
                    <ol class="breadcrumb float-sm-right">
                        <li class="breadcrumb-item"><a href="#">Buku Tamu</a></li>
                        <li class="breadcrumb-item"><a href="#">Formulir</a></li>
                        <li class="breadcrumb-item active">Isi Formulir</li>
                    </ol>
                </div>
            </div>
        </div>
    </div>

    <div class="content">
        <div class="container">


            <!--questionBox-->
            <div class="questionBox">

                <!-- transition -->


                <!--qusetionContainer-->
                <div class="questionContainer" v-if="questionIndex < quiz.questions.length" v-bind:key="questionIndex">

                    <header>
                        <h1 class="title is-6">VueQuiz</h1>
                        <!--progress-->
                        <div class="progressContainer">
                            <progress class="progress is-info is-small"
                                :value="(questionIndex / quiz.questions.length) * 100" max="100">{{ (questionIndex /
                                    quiz.questions.length) * 100 }}%</progress>
                            <p>{{ (questionIndex / quiz.questions.length) * 100 }}% complete</p>
                        </div>
                        <!--/progress-->
                    </header>

                    <!-- questionTitle -->
                    <h2 class="titleContainer title">{{ quiz.questions[questionIndex].text }}</h2>

                    <!-- quizOptions -->
                    <div class="optionContainer">
                        <div class="option" v-for="(response, index) in quiz.questions[questionIndex].responses"
                            @click="selectOption( index + 1 )" :class="{ 'is-selected': userResponses[questionIndex] == ( index + 1 ) }"
                            :key="index">
                            {{ charIndex(index) }}. {{ response.text }}
                        </div>
                    </div>

                    <!--quizFooter: navigation and progress-->
                    <footer class="questionFooter">

                        <!--pagination-->
                        <nav class="pagination" role="navigation" aria-label="pagination">

                            <!-- back button -->
                            <a class="button" v-on:click="prev();" :disabled="questionIndex < 1">
                                Back
                            </a>

                            <!-- next button -->
                            <a class="button" :class="(userResponses[questionIndex] == null) ? '' : 'is-active'"
                                v-on:click="next();" :disabled="questionIndex >= quiz.questions.length">
                                {{ (userResponses[questionIndex] == null) ? 'Skip' : 'Next' }}
                            </a>

                        </nav>
                        <!--/pagination-->

                    </footer>
                    <!--/quizFooter-->

                </div>
                <!--/questionContainer-->

                <!--quizCompletedResult-->
                <div v-if="questionIndex >= quiz.questions.length" v-bind:key="questionIndex"
                    class="quizCompleted has-text-centered">

                    <!-- quizCompletedIcon: Achievement Icon -->
                    <span class="icon">
                        <i class="fa" :class="score() > 3 ? 'fa-check-circle-o is-active' : 'fa-times-circle'"></i>
                    </span>

                    <!--resultTitleBlock-->
                    <h2 class="title">
                        You did {{ (score() > 7 ? 'an amazing' : (score() < 4 ? 'a poor' : 'a good')) }} job! </h2>
                            <p class="subtitle">
                                Total score: {{ score() }} / {{ quiz.questions.length }}
                            </p>
                            <br>
                            <a class="button" @click="restart()">restart <i class="fa fa-refresh"></i></a>
                            <!--/resultTitleBlock-->

                </div>
                <!--/quizCompetedResult-->

            </div>
            <!--/questionBox-->

        </div>
    </div>
</template>
  
<script>
import GuestService from '../services/guest.service';
import Form from 'vform';
import Swal from 'sweetalert2';
import {
    HasError,
    AlertError,
} from 'vform/src/components/bootstrap5';

var quiz = {
    user: "Dave",
    questions: [
        {
            text: "What is the full form of HTTP?",
            responses: [
                { text: "Hyper text transfer package" },
                { text: "Hyper text transfer protocol", correct: true },
                { text: "Hyphenation text test program" },
                { text: "None of the above" }
            ]
        },
        {
            text: "HTML document start and end with which tag pairs?",
            responses: [
                { text: "HTML", correct: true },
                { text: "WEB" },
                { text: "HEAD" },
                { text: "BODY" }
            ]
        },
        {
            text: "Which tag is used to create body text in HTML?",
            responses: [
                { text: "HEAD" },
                { text: "BODY", correct: true },
                { text: "TITLE" },
                { text: "TEXT" }
            ]
        },
        {
            text: "Outlook Express is _________",
            responses: [
                { text: "E-Mail Client", correct: true },
                { text: "Browser" },
                {
                    text: "Search Engine"
                },
                { text: "None of the above" }
            ]
        },
        {
            text: "What is a search engine?",
            responses: [
                { text: "A hardware component " },
                {
                    text: "A machinery engine that search data"
                },
                { text: "A web site that searches anything", correct: true },
                { text: "A program that searches engines" }
            ]
        },
        {
            text:
                "What does the .com domain represents?",
            responses: [
                { text: "Network" },
                { text: "Education" },
                { text: "Commercial", correct: true },
                { text: "None of the above" }
            ]
        },
        {
            text: "In Satellite based communication, VSAT stands for? ",
            responses: [
                { text: " Very Small Aperture Terminal", correct: true },
                { text: "Varying Size Aperture Terminal " },
                {
                    text: "Very Small Analog Terminal"
                },
                { text: "None of the above" }
            ]
        },
        {
            text: "What is the full form of TCP/IP? ",
            responses: [
                { text: "Telephone call protocol / international protocol" },
                { text: "Transmission control protocol / internet protocol", correct: true },
                { text: "Transport control protocol / internet protocol " },
                { text: "None of the above" }
            ]
        },
        {
            text:
                "What is the full form of HTML?",
            responses: [
                {
                    text: "Hyper text marking language"
                },
                { text: "Hyphenation text markup language " },
                { text: "Hyper text markup language", correct: true },
                { text: "Hyphenation test marking language" }
            ]
        },
        {
            text: "\"Yahoo\", \"Infoseek\" and \"Lycos\" are _________?",
            responses: [
                { text: "Browsers " },
                { text: "Search Engines", correct: true },
                { text: "News Group" },
                { text: "None of the above" }
            ]
        }
    ]
},
    userResponseSkelaton = Array(quiz.questions.length).fill(null);

export default {
    name: "Landing",
    data() {
        return {
            quiz: quiz,
            questionIndex: 0,
            userResponses: userResponseSkelaton,
            isActive: false
        };
    },
    computed: {
        charIndex() {
            return (i) => {
                return String.fromCharCode(97 + i);
            }
        },
    },
    methods: {
        loadQuestion: function() {
            axios
            .get('/api/get/questions')
            .then((response) => {
                console.log(response);
            });
        },
        restart: function () {
            this.questionIndex = 0;
            this.userResponses = Array(this.quiz.questions.length).fill(null);
        },
        selectOption: function (index) {
            // Vue.set(this.userResponses, this.questionIndex, index);
            this.userResponses[this.questionIndex] = index;
            console.log(this.userResponses);
        },
        next: function () {
            if (this.questionIndex < this.quiz.questions.length)
                this.questionIndex++;
        },

        prev: function () {
            if (this.quiz.questions.length > 0) this.questionIndex--;
        },
        // Return "true" count in userResponses
        score: function () {
            var score = 0;
            for (let i = 0; i < this.userResponses.length; i++) {
                if (
                    typeof this.quiz.questions[i].responses[
                    this.userResponses[i]
                    ] !== "undefined" &&
                    this.quiz.questions[i].responses[this.userResponses[i]].correct
                ) {
                    score = score + 1;
                }
            }
            return score;

            //return this.userResponses.filter(function(val) { return val }).length;
        }
    },
    mounted() {
        this.loadQuestion();
    }

};
</script>
  
<style scoped>
.content-wrapper {
    margin-left: 0 !important;
}

.main-footer {
    margin-left: 0 !important;
}

.main-header {
    margin-left: 0 !important;
}

.main-header {
    --bs-navbar-padding-x: 1rem !important;
}

@import url("https://fonts.googleapis.com/css?family=Montserrat:400,400i,700");
@import url("https://fonts.googleapis.com/css?family=Open+Sans:400,400i,700");

body {
    font-family: "Open Sans", sans-serif;
    font-size: 14px;
    height: 100vh;
    background: #cfd8dc;
    /* mocking native UI */
    cursor: default !important;
    /* remove text selection cursor */
    user-select: none;
    /* remove text selection */
    user-drag: none;
    /* disbale element dragging */
    display: flex;
    align-items: center;
    justify-content: center;
}

.button {
    transition: 0.3s;
}

.title,
.subtitle {
    font-family: Montserrat, sans-serif;
    font-weight: normal;
}

.animated {
    transition-duration: 0.15s;
}

/* .container {
    margin: 0 0.5rem;
} */

.questionBox {
    /* max-width: 30rem; */
    /* width: 30rem; */
    min-height: 30rem;
    background: #fafafa;
    position: relative;
    display: flex;
    border-radius: 0.5rem;
    overflow: hidden;
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23);
    margin: 0 auto !important;
}

.questionBox header {
    background: rgba(0, 0, 0, 0.025);
    padding: 1.5rem;
    text-align: center;
    border-bottom: 1px solid rgba(0, 0, 0, 0.1);
}

.questionBox header h1 {
    font-weight: bold;
    margin-bottom: 1rem !important;
}

.questionBox header .progressContainer {
    width: 60%;
    margin: 0 auto;
}

.questionBox header .progressContainer>progress {
    margin: 0 auto;
    border-radius: 5rem;
    overflow: hidden;
    border: none;
    color: #3d5afe;
}

.questionBox header .progressContainer>progress::-moz-progress-bar {
    background: #3d5afe;
}

.questionBox header .progressContainer>progress::-webkit-progress-value {
    background: #3d5afe;
}

.questionBox header .progressContainer>p {
    margin: 0;
    margin-top: 0.5rem;
}

.questionBox .titleContainer {
    text-align: center;
    margin: 0 auto;
    padding: 1.5rem;
}

.questionBox .quizForm {
    display: block;
    white-space: normal;
    height: 100%;
    width: 100%;
}

.questionBox .quizForm .quizFormContainer {
    height: 100%;
    margin: 15px 18px;
}

.questionBox .quizForm .quizFormContainer .field-label {
    text-align: left;
    margin-bottom: 0.5rem;
}

.questionBox .quizCompleted {
    width: 100%;
    padding: 1rem;
    text-align: center;
}

.questionBox .quizCompleted>.icon {
    color: #ff5252;
    font-size: 5rem;
}

.questionBox .quizCompleted>.icon .is-active {
    color: #00e676;
}

.questionBox .questionContainer {
    white-space: normal;
    height: 100%;
    width: 100%;
}

.questionBox .questionContainer .optionContainer {
    margin-top: 12px;
    flex-grow: 1;
}

.questionBox .questionContainer .optionContainer .option {
    border-radius: 290486px;
    padding: 9px 18px;
    margin: 0 18px;
    margin-bottom: 12px;
    transition: 0.3s;
    cursor: pointer;
    background-color: rgba(0, 0, 0, 0.05);
    color: rgba(0, 0, 0, 0.85);
    border: transparent 1px solid;
}

.questionBox .questionContainer .optionContainer .option.is-selected {
    border-color: rgba(0, 0, 0, 0.25);
    background-color: white;
}

.questionBox .questionContainer .optionContainer .option:hover {
    background-color: rgba(0, 0, 0, 0.1);
}

.questionBox .questionContainer .optionContainer .option:active {
    transform: scaleX(0.9);
}

.questionBox .questionContainer .questionFooter {
    background: rgba(0, 0, 0, 0.025);
    border-top: 1px solid rgba(0, 0, 0, 0.1);
    width: 100%;
    align-self: flex-end;
}

.questionBox .questionContainer .questionFooter .pagination {
    margin: 15px 25px;
}

.pagination {
    display: flex;
    justify-content: space-between;
}

.button {
    padding: 0.5rem 1rem;
    border: 1px solid rgba(0, 0, 0, 0.25);
    border-radius: 5rem;
    margin: 0 0.25rem;
    transition: 0.3s;
}

.button:hover {
    cursor: pointer;
    background: #eceff1;
    border-color: rgba(0, 0, 0, 0.25);
}

.button.is-active {
    background: #3d5afe;
    color: white;
    border-color: transparent;
}

.button.is-active:hover {
    background: #0a2ffe;
}

@media screen and (min-width: 769px) {
    .questionBox {
        align-items: center;
        justify-content: center;
    }

    .questionBox .questionContainer {
        display: flex;
        flex-direction: column;
    }
}

@media screen and (max-width: 768px) {
    .sidebar {
        height: auto !important;
        border-radius: 6px 6px 0px 0px;
    }
}
</style>