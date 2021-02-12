require 'test_helper'

class UserTest < ActiveSupport::TestCase

  def setup
    @user = User.new(first_name: "Sam", last_name: "Smith", email: "sam@example.com", role: 0, password: "password", password_confirmation: "password")
  end

  test "user should be valid" do
    assert @user.valid?
  end

  test "first_name should be present" do
    @user.first_name = nil
    assert_not @user.valid?
    assert_equal ["First name can't be blank"],
                  @user.errors.full_messages
  end

  test "last_name should be present" do
    @user.last_name = nil
    assert_not @user.valid?
    assert_equal ["Last name can't be blank"],
                  @user.errors.full_messages
  end

  test "email should be present" do
    @user.email = nil
    assert_not @user.valid?
    assert_equal "Email can't be blank",
                  @user.errors.full_messages[0]
  end

  test "first_name should be of valid lenth" do
    @user.first_name = "s"*51
    assert_not @user.valid?
    assert_equal ["First name is too long (maximum is 50 characters)"],
                  @user.errors.full_messages
  end

  test "last_name should be of valid lenth" do
    @user.last_name = "s"*51
    assert_not @user.valid?
    assert_equal ["Last name is too long (maximum is 50 characters)"],
                  @user.errors.full_messages
  end

  test "email should be unique" do
    @user.save!
    @user1 = @user.dup
    assert_not @user1.valid?
    assert_equal ["Email has already been taken"],
                  @user1.errors.full_messages
  end

  test "email should be loweredcase" do
    @user.email = "AAA@EXAMPLE.COM"
    assert @user.valid?
  end

  test "email should reject invalid email address" do
    @user.email = "aaa"
    assert_not @user.valid?
    assert_equal ["Email is invalid"],
                  @user.errors.full_messages
  end

  test "email should accept valid email address" do
    @user.email = "aa1a@example.com"
    assert @user.valid?
  end
 
  test "similar email with difference in uppercase and lowercase" do
    @user.save
    @user1 = @user.dup
    @user1.save
    assert_not @user1.valid?
    assert_equal ["Email has already been taken"],
                  @user1.errors.full_messages
  end

  test "user should have a valid role either standard: 0 or administrator: 1" do
    @user.role = 1
    assert @user.valid?
  end

  test "password can't be blank" do
    @user.password = nil
    assert_not @user.valid?
    assert_equal ["Password can't be blank"],
                @user.errors.full_messages
  end

  test "password_confirmation can't be blank" do
    @user.password_confirmation = nil
    assert_not @user.save
    assert_equal ["Password confirmation can't be blank"],
                  @user.errors.full_messages
  end

  test "password should be of minimum length 6" do
    @user.password = "s"
    assert_not @user.valid?
    assert_equal "Password is too short (minimum is 6 characters)",
                  @user.errors.full_messages[2]
  end

  test "password and password_confirmation should match" do
    @user.password = "password123"
    @user.password_confirmation = "password"
    assert_not @user.valid?
    assert_equal "Password confirmation doesn't match Password",
                  @user.errors.full_messages[1]
  end

end





