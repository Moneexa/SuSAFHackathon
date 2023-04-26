import { React, useEffect } from 'react';
import { useStoreState } from 'easy-peasy';
import { Document, Page, Text, PDFViewer, StyleSheet, Image } from '@react-pdf/renderer';
function DocumentTemplate() {
    const featureObject = useStoreState((state) => state.featureObject);

    const styles = StyleSheet.create({
        page: {
            backgroundColor: "white",
            color: "black",
        },
        section: {
            margin: 10,
            padding: 10,
        },
        viewer: {
            width: window.innerWidth,
            height: window.innerHeight
        }

    });
    return (
        <PDFViewer style={styles.viewer}>
            <Document>

                <Page style={{ padding: "50px" }}>
                    <Text style={{ fontSize: "20px", textAlign: "center", margin: "20px" }}> Your SusAF Assessment Report</Text>
                    <Text style={{ fontSize: "15px" }}>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,
                        molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum
                        numquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium
                        optio, eaque rerum! Provident similique accusantium nemo autem.
                    </Text>
                    <Text style={{ fontSize: "15px" }}>
                        The Name of the product : {featureObject[0]?.featureAnswers?.product_name}
                    </Text>
                    <Text style={{ fontSize: "15px" }}>
                        The Feature user wishes to discuss: {
                            featureObject[0]?.featureAnswers?.feature
                        }
                    </Text>
                    <Text style={{ fontSize: "15px" }}>
                        The 1st impact chosen for the feature: {
                            featureObject[0]?.impactAnswers?.explanation
                        }
                    </Text>
                    <Text style={{ fontSize: "15px" }}>
                        The category of this feature is: {
                            (Object.keys(featureObject[0]?.impact1Answers?.impact)[0] === "env_p"
                                || Object.keys(featureObject[0]?.impact1Answers?.impact)[0] === "env_n"
                            ) ? "environmental" :
                                (Object.keys(featureObject[0]?.impact1Answers?.impact)[0] === "social_p"
                                    || Object.keys(featureObject[0]?.impact1Answers?.impact)[0] === "social_n"
                                ) ? "social" :
                                    (Object.keys(featureObject[0]?.impact1Answers?.impact)[0] === "ind_p"
                                        || Object.keys(featureObject[0]?.impact1Answers?.impact)[0] === "ind_n"
                                    ) ? "individual" :
                                        (Object.keys(featureObject[0]?.impact1Answers?.impact)[0] === "economic_p"
                                            || Object.keys(featureObject[0]?.impact1Answers?.impact)[0] === "economic_n"
                                        ) ? "economic" : ""
                        }
                    </Text>
                    <Text style={{ fontSize: "15px" }}>
                        And its likelihood as per the user: {
                            featureObject[0]?.impact1Answers?.likelihood
                        }
                    </Text>
                    <Text style={{ fontSize: "15px" }}>
                        And its intensity as per stated: {
                            featureObject[0]?.impact1Answers?.intensity
                        }
                    </Text>
                    <Text style={{ fontSize: "15px" }}>
                        This impact can be described as:{
                            featureObject[0]?.impact1Answers?.classification
                        }
                    </Text>
                    <Text style={{ fontSize: "15px" }}>
                        The consequent impact chosen for the feature: {
                            featureObject[0]?.impact2Answers?.explanation
                        }
                    </Text>
                    <Text style={{ fontSize: "15px" }}>
                        The category of this feature is: {
                            (Object.keys(featureObject[0]?.impact2Answers?.impact)[0] === "env_p"
                                || Object.keys(featureObject[0]?.impact2Answers?.impact)[0] === "env_n"
                            ) ? "environmental" :
                                (Object.keys(featureObject[0]?.impact2Answers?.impact)[0] === "social_p"
                                    || Object.keys(featureObject[0]?.impact2Answers?.impact)[0] === "social_n"
                                ) ? "social" :
                                    (Object.keys(featureObject[0]?.impact2Answers?.impact)[0] === "ind_p"
                                        || Object.keys(featureObject[0]?.impact2Answers?.impact)[0] === "ind_n"
                                    ) ? "individual" :
                                        (Object.keys(featureObject[0]?.impact2Answers?.impact)[0] === "economic_p"
                                            || Object.keys(featureObject[0]?.impact2Answers?.impact)[0] === "economic_n"
                                        ) ? "economic" : ""
                        }
                    </Text>
                    <Text style={{ fontSize: "15px" }}>
                        And its likelihood as per the user: {
                            featureObject[0]?.impact2Answers?.likelihood
                        }
                    </Text>
                    <Text style={{ fontSize: "15px" }}>
                        And its intensity as per stated: {
                            featureObject[0]?.impact2Answers?.intensity
                        }
                    </Text>
                    <Text style={{ fontSize: "15px" }}>
                        This impact can be described as:{
                            featureObject[0]?.impact3Answers?.classification
                        }
                    </Text>
                    <Text style={{ fontSize: "15px" }}>
                        The consequent impact chosen for the feature: {
                            featureObject[0]?.impact3Answers?.explanation
                        }
                    </Text>
                    <Text style={{ fontSize: "15px" }}>
                        The category of this feature is: {
                            (Object.keys(featureObject[0]?.impact3Answers?.impact)[0] === "env_p"
                                || Object.keys(featureObject[0]?.impact3Answers?.impact)[0] === "env_n"
                            ) ? "environmental" :
                                (Object.keys(featureObject[0]?.impact3Answers?.impact)[0] === "social_p"
                                    || Object.keys(featureObject[0]?.impact3Answers?.impact)[0] === "social_n"
                                ) ? "social" :
                                    (Object.keys(featureObject[0]?.impact3Answers?.impact)[0] === "ind_p"
                                        || Object.keys(featureObject[0]?.impact3Answers?.impact)[0] === "ind_n"
                                    ) ? "individual" :
                                        (Object.keys(featureObject[0]?.impact3Answers?.impact)[0] === "economic_p"
                                            || Object.keys(featureObject[0]?.impact3Answers?.impact)[0] === "economic_n"
                                        ) ? "economic" : ""
                        }
                    </Text>
                    <Text style={{ fontSize: "15px" }}>
                        And its likelihood as per the user: {
                            featureObject[0]?.impact3Answers?.likelihood
                        }
                    </Text>
                    <Text style={{ fontSize: "15px" }}>
                        And its intensity as per stated: {
                            featureObject[0]?.impact3Answers?.intensity
                        }
                    </Text>
                    <Text style={{ fontSize: "15px" }}>
                        This impact can be described as:{
                            featureObject[0]?.impact3Answers?.classification
                        }
                    </Text>

                </Page>
            </Document>
        </PDFViewer>
    );
}

export default DocumentTemplate;
