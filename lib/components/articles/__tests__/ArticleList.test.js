import React from 'react';
import renderer from 'react-test-renderer';
import ArticleList from "../ArticleList";

describe('ArticleList', () => {
    const testProps = {
        articles: {
            a: {id: "a", authorId: "1", title: "A", body: "AA"},
            b: {id: "b", authorId: "2", title: "B", body: "BB"},
        },
        articleActions: {
            lookupAuthor: jest.fn().mockReturnValue({
                id: "1",
                firstName: "X",
                lastName: "Y",
                website: "https://test.com"
            })
        }
    }

    it('should render list correctly', () => {
        const tree = renderer.create(
            <ArticleList {...testProps} />
        ).toJSON();

        console.log(tree);

        expect(tree.children.length).toBe(2);
        expect(tree).toMatchSnapshot();
    })
});
