import React from 'react';
import { useStoreState } from 'easy-peasy';
import { Document, Page, Text, PDFViewer, StyleSheet } from '@react-pdf/renderer';
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
                        Through the use of the Susaf Analysis framework, organizations can effectively evaluate the sustainability dimensions of each product feature. This approach ensures that sustainability is integrated into every aspect of the product design and development process, resulting in products that are more sustainable in terms of social, technical, individual, economic, and environmental sustainability. As a result, organizations can make informed decisions on how best to address sustainability challenges, resulting in products that are more socially responsible and environmentally sustainable. By conducting a sustainability analysis using Susaf Analysis, organizations can make significant progress towards a more sustainable future.
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
