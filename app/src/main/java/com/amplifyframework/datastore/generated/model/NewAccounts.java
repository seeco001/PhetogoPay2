package com.amplifyframework.datastore.generated.model;

import com.amplifyframework.core.model.temporal.Temporal;
import com.amplifyframework.core.model.ModelIdentifier;

import java.util.List;
import java.util.UUID;
import java.util.Objects;

import androidx.core.util.ObjectsCompat;

import com.amplifyframework.core.model.AuthStrategy;
import com.amplifyframework.core.model.Model;
import com.amplifyframework.core.model.ModelOperation;
import com.amplifyframework.core.model.annotations.AuthRule;
import com.amplifyframework.core.model.annotations.Index;
import com.amplifyframework.core.model.annotations.ModelConfig;
import com.amplifyframework.core.model.annotations.ModelField;
import com.amplifyframework.core.model.query.predicate.QueryField;

import static com.amplifyframework.core.model.query.predicate.QueryField.field;

/** This is an auto generated class representing the NewAccounts type in your schema. */
@SuppressWarnings("all")
@ModelConfig(pluralName = "NewAccounts", type = Model.Type.USER, version = 1, authRules = {
  @AuthRule(allow = AuthStrategy.PRIVATE, operations = { ModelOperation.READ, ModelOperation.CREATE })
}, hasLazySupport = true)
public final class NewAccounts implements Model {
  public static final NewAccountsPath rootPath = new NewAccountsPath("root", false, null);
  public static final QueryField ID = field("NewAccounts", "id");
  public static final QueryField GOV_ID = field("NewAccounts", "govId");
  public static final QueryField CREDIT_ACCOUNT = field("NewAccounts", "creditAccount");
  public static final QueryField SUB = field("NewAccounts", "sub");
  private final @ModelField(targetType="ID", isRequired = true) String id;
  private final @ModelField(targetType="ID") String govId;
  private final @ModelField(targetType="String") String creditAccount;
  private final @ModelField(targetType="String") String sub;
  private @ModelField(targetType="AWSDateTime", isReadOnly = true) Temporal.DateTime createdAt;
  private @ModelField(targetType="AWSDateTime", isReadOnly = true) Temporal.DateTime updatedAt;
  /** @deprecated This API is internal to Amplify and should not be used. */
  @Deprecated
   public String resolveIdentifier() {
    return id;
  }
  
  public String getId() {
      return id;
  }
  
  public String getGovId() {
      return govId;
  }
  
  public String getCreditAccount() {
      return creditAccount;
  }
  
  public String getSub() {
      return sub;
  }
  
  public Temporal.DateTime getCreatedAt() {
      return createdAt;
  }
  
  public Temporal.DateTime getUpdatedAt() {
      return updatedAt;
  }
  
  private NewAccounts(String id, String govId, String creditAccount, String sub) {
    this.id = id;
    this.govId = govId;
    this.creditAccount = creditAccount;
    this.sub = sub;
  }
  
  @Override
   public boolean equals(Object obj) {
      if (this == obj) {
        return true;
      } else if(obj == null || getClass() != obj.getClass()) {
        return false;
      } else {
      NewAccounts newAccounts = (NewAccounts) obj;
      return ObjectsCompat.equals(getId(), newAccounts.getId()) &&
              ObjectsCompat.equals(getGovId(), newAccounts.getGovId()) &&
              ObjectsCompat.equals(getCreditAccount(), newAccounts.getCreditAccount()) &&
              ObjectsCompat.equals(getSub(), newAccounts.getSub()) &&
              ObjectsCompat.equals(getCreatedAt(), newAccounts.getCreatedAt()) &&
              ObjectsCompat.equals(getUpdatedAt(), newAccounts.getUpdatedAt());
      }
  }
  
  @Override
   public int hashCode() {
    return new StringBuilder()
      .append(getId())
      .append(getGovId())
      .append(getCreditAccount())
      .append(getSub())
      .append(getCreatedAt())
      .append(getUpdatedAt())
      .toString()
      .hashCode();
  }
  
  @Override
   public String toString() {
    return new StringBuilder()
      .append("NewAccounts {")
      .append("id=" + String.valueOf(getId()) + ", ")
      .append("govId=" + String.valueOf(getGovId()) + ", ")
      .append("creditAccount=" + String.valueOf(getCreditAccount()) + ", ")
      .append("sub=" + String.valueOf(getSub()) + ", ")
      .append("createdAt=" + String.valueOf(getCreatedAt()) + ", ")
      .append("updatedAt=" + String.valueOf(getUpdatedAt()))
      .append("}")
      .toString();
  }
  
  public static BuildStep builder() {
      return new Builder();
  }
  
  /**
   * WARNING: This method should not be used to build an instance of this object for a CREATE mutation.
   * This is a convenience method to return an instance of the object with only its ID populated
   * to be used in the context of a parameter in a delete mutation or referencing a foreign key
   * in a relationship.
   * @param id the id of the existing item this instance will represent
   * @return an instance of this model with only ID populated
   */
  public static NewAccounts justId(String id) {
    return new NewAccounts(
      id,
      null,
      null,
      null
    );
  }
  
  public CopyOfBuilder copyOfBuilder() {
    return new CopyOfBuilder(id,
      govId,
      creditAccount,
      sub);
  }
  public interface BuildStep {
    NewAccounts build();
    BuildStep id(String id);
    BuildStep govId(String govId);
    BuildStep creditAccount(String creditAccount);
    BuildStep sub(String sub);
  }
  

  public static class Builder implements BuildStep {
    private String id;
    private String govId;
    private String creditAccount;
    private String sub;
    public Builder() {
      
    }
    
    private Builder(String id, String govId, String creditAccount, String sub) {
      this.id = id;
      this.govId = govId;
      this.creditAccount = creditAccount;
      this.sub = sub;
    }
    
    @Override
     public NewAccounts build() {
        String id = this.id != null ? this.id : UUID.randomUUID().toString();
        
        return new NewAccounts(
          id,
          govId,
          creditAccount,
          sub);
    }
    
    @Override
     public BuildStep govId(String govId) {
        this.govId = govId;
        return this;
    }
    
    @Override
     public BuildStep creditAccount(String creditAccount) {
        this.creditAccount = creditAccount;
        return this;
    }
    
    @Override
     public BuildStep sub(String sub) {
        this.sub = sub;
        return this;
    }
    
    /**
     * @param id id
     * @return Current Builder instance, for fluent method chaining
     */
    public BuildStep id(String id) {
        this.id = id;
        return this;
    }
  }
  

  public final class CopyOfBuilder extends Builder {
    private CopyOfBuilder(String id, String govId, String creditAccount, String sub) {
      super(id, govId, creditAccount, sub);
      
    }
    
    @Override
     public CopyOfBuilder govId(String govId) {
      return (CopyOfBuilder) super.govId(govId);
    }
    
    @Override
     public CopyOfBuilder creditAccount(String creditAccount) {
      return (CopyOfBuilder) super.creditAccount(creditAccount);
    }
    
    @Override
     public CopyOfBuilder sub(String sub) {
      return (CopyOfBuilder) super.sub(sub);
    }
  }
  

  public static class NewAccountsIdentifier extends ModelIdentifier<NewAccounts> {
    private static final long serialVersionUID = 1L;
    public NewAccountsIdentifier(String id) {
      super(id);
    }
  }
  
}
