<template>
    <div class="text-center">
        <v-dialog width="500">
            <template v-slot:activator="{ on }">
                <v-btn class="blue darken-3" dark v-on="on">Add New Project</v-btn>
            </template>
            <v-card>
                <v-card-title class="headline blue lighten-3" primary-title>Add a New Project</v-card-title>
                <v-card-text>
                    <v-form class="pa-3" ref="form">
                        <v-text-field label="Title" v-model="title" prepend-icon="folder" :rules="titleRules"></v-text-field>
                        <v-textarea label="Information" v-model="content" prepend-icon="edit" :rules="contentRules"></v-textarea>
                        <v-menu  max-width="290">
                            <template v-slot:activator="{on}">
                                <v-text-field :rules="dataRules" :value="formattedDate" v-on="on" label="Due date" prepend-icon="date_range"></v-text-field>
                            </template>
                            <v-date-picker v-model="due"></v-date-picker>
                        </v-menu>
                        <v-btn text color="blue" @click="submit">Add project</v-btn>
                    </v-form>
                </v-card-text>
            </v-card>
        </v-dialog>
    </div>
</template>

<script>
import moment from 'moment';
//import db from '@/fb.js';

export default {
    data() {
        return {
            title: '',
            content: '',
            due: null,
            titleRules: [
                v => v.length >= 5 || 'Minimum length is 5 characters'
            ],
            contentRules: [
                c => c.length >= 20 || 'Minimum length is 20 characters'
            ],
            dataRules: [
                d => d.length >=1 || 'Choose date!'
            ]
        };
    },
    methods: {
        submit() {
             if(this.$refs.form.validate()) {
            //     const project = {
            //         title: this.title,
            //         content: this.content,
            //         //due: this.format(this.due, 'Do MMMM YYYY'),
            //         person: 'The Net Ninja',
            //         status: 'ongoing'
            //     }

            //     db.collection('projects').add(project);
            console.log(this.title + ' ' + this.content);
            }
        }
    },
    computed: {
        formattedDate() {
            return this.due ? moment(this.due).format("Do MMMM YYYY") : "";
        }
    }
}
</script>