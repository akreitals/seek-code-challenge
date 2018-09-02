// @flow
import React from 'react';
import {
    Button,
    Heading,
    Container,
    Card,
    Input,
    Text,
    Label,
    Flex
} from '../../../components';

type LoginFormProps = {
    error: object | string,
    username: string,
    password: string,
    submitted: boolean,
    handleChange: func,
    handleSubmit: func
};

const LoginForm = ({
    error,
    username,
    password,
    submitted,
    handleChange,
    handleSubmit
}: LoginFormProps) => (
    <Container>
        <Flex alignItems="center" justifyContent="center">
            <Card py={18} px={25} mt={[50, 200]} width={[1, 500]}>
                <form name="form" onSubmit={handleSubmit}>
                    <Heading.h1>Customer Sign in</Heading.h1>

                    <Label>Email</Label>
                    <Input
                        id="email"
                        type="text"
                        mb={24}
                        name="username"
                        value={username}
                        onChange={handleChange}
                    />
                    {submitted &&
                        !username && (
                            <Text mt={-24} color="error">
                                Username is required
                            </Text>
                        )}

                    <Label>Password</Label>
                    <Input
                        id="password"
                        type="password"
                        name="password"
                        value={password}
                        mb={24}
                        onChange={handleChange}
                    />
                    {submitted &&
                        !password && (
                            <Text mt={-24} color="error">
                                Password is required
                            </Text>
                        )}

                    {error && (
                        <Text color="error">
                            Are you sure that’s right? We don’t recognise that
                            combination
                        </Text>
                    )}

                    <Button width={[1, 1 / 4]} lineHeight={48} mt={2}>
                        Sign In
                    </Button>
                </form>
            </Card>
        </Flex>
    </Container>
);

export default LoginForm;
