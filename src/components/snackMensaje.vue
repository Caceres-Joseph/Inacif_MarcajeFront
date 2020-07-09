<template>
<div class="survey-base">

    <!-- Snackbar -->
    <v-snackbar
        :timeout=3000
        button
        v-model="snackStatus"
        :color="snackColor">
        {{ sanckText }}
        <!-- <v-btn    @click.native="snackStatus = false">Cerrar</v-btn> -->
        <div>
            <v-btn
                depressed
                small
                dark
                :color="snackColor"
                @click.native="snackStatus = false">Cerrar</v-btn>
        </div> 
    </v-snackbar>
</div>
</template>

<script>
export default {
    props: ["sanckText"],
    snackColor: "teal darken-4",
    snackStatus: false
};
</script>
